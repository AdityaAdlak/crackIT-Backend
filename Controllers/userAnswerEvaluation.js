
import { userAnswer } from "../Models/userAttemptAnswers.js";
import { interviewSet } from "../Models/interviewModel.js";
import { promptFinder } from "../AI/ai.controller.js";
import { improvementOverTime, totalAttempted } from "../Controllers/userAnalyticsController.js";
import { executeCode } from "../Compiler/codeExecutor.js";
import mongoose, { mongo } from "mongoose";


export const userEvaluation = async(req,res)=>{
    try {
        const {userId , interviewSetId , answers , codingQueLang} = req.body;

        const set = await interviewSet.findById(interviewSetId);

        console.log(set,"Final interview Set")

        if(!set)
        {
            return res.status(404).json({
                success : false,
                message : "Interview set not found!"
            })
        }

        let mcqCount = 0;
        let theoryCount = 0;
        let codingCount = 0;
        let correctMcqCount = 0;
        let correctCodingCount = 0;
        


        const formattedAnswers = [];


        for (const q of set.questions) {

            const userResponse = answers.find(ans => q.questionTitle === ans.questionTitle) || {};
        
           
            console.log("User response:", userResponse);
        
            if (userResponse && userResponse.response !== null) {
                const questionType = userResponse.questionType?.toLowerCase();
        
                switch (questionType) {
                    case 'mcq':
                        mcqCount++;
                        if (userResponse.response === q.correctAnswer) {
                            correctMcqCount++;
                        }
                        break;
        
                    case 'coding':
                        codingCount++;
        
                    
                        if (!q.testCase || !Array.isArray(q.testCase) || q.testCase.length === 0) {
                            console.log(`Invalid test case format for question: ${q.questionTitle}`, q.testCase);
                            throw new Error("Invalid test case format");
                        }

                        const formattedTestCases = q.testCase.map(tc => [
                            tc.input.toString(),
                            tc.expectedOutput.toString()
                        ]);
        
                        // console.log("Executing code with test cases:", formattedTestCases);
        
                        if (!userResponse.response || typeof userResponse.response !== 'string') {
                            console.error(`Invalid user response for question: ${q.questionTitle}`, userResponse.response);
                            continue; 
                        }
        
                        try {
                            
                            const result = await executeCode(
                                userResponse.response,
                                codingQueLang,
                                formattedTestCases
                            );
        
                            if (result) {
                                console.log("Coding response received:", result);
                            }
        
                            if (result.passedCases === q.testCase.length) {
                                correctCodingCount++;
                            }
                        } catch (err) {
                            console.error(`Error during code execution for question: ${q.questionTitle}`, err.message);
                            throw new Error("Code execution failed");
                        }
                        break;
        
                    case 'theory':
                        theoryCount++;
                        break;
        

                    default:
                        console.log(`Unknown question type: ${questionType}...`);
                }


            } else {
                console.log(`No response found for question: ${q.questionTitle}`);
            }
        
            
            formattedAnswers.push({
                questionTitle: q.questionTitle,
                questionType: q.typeOfQuestion,
                userResponse: userResponse?.response || null
            });
        }
        
        console.log("Final formatted answers:", formattedAnswers);
        

        const newUserAns = await userAnswer.create({
            userId , 
            interviewSetId,
            answers : formattedAnswers,
            status : "submitted"
        })

        
// running simultaneous process 

let totalScore = 0;
totalScore = correctCodingCount + correctMcqCount;

await Promise.all([
    totalAttempted(userId, { mcqCount, theoryCount, codingCount, correctMcqCount, correctCodingCount }),
    promptFinder(newUserAns._id)
        .then(aiFeedback => {
            console.log("AI evaluation done:", aiFeedback);
        })
        .catch(err => console.log("Error in AI evaluation:", err)),

        (async()=>{
            if(mongoose.Types.ObjectId.isValid(userId) && typeof totalScore === 'number' && totalScore >= 0)
            {
                await improvementOverTime(userId , totalScore);
            }
            else{
                console.log("Invalid userId or score...")
            }
        })
]);


        return res.status(201).json({
            success : true,
            message : "Answers submitted successfully...",
            data : newUserAns 
        });

    }  

    catch (error) {
        return res.status(500).json(
            {
                message : "Something went wrong in creating Answer Entry...",
                success : false
            }
        )
    }
}


