import { interviewSet } from "../Models/interviewModel.js";
import { promptFinder } from "../AI/ai.controller.js";
import { executeCode } from "../Compiler/codeExecutor.js";
import { aiEvaluationNew } from "../Models/aiEvaluatedAnswers.js";
import { userAnswer } from "../Models/userAttemptAnswers.js";

export const userEvaluation = async (req, res) => {
    try {
        console.log("The body of the ",req.body);
        const { userId, interviewSetId, answers, codingQueLang } = req.body;

 const set = await interviewSet.findById(interviewSetId);
        if (!set) {
            return res.status(404).json({
                success: false,
                message: "Interview set not found!",
            });
        }

        let mcqCount = 0,
            theoryCount = 0,
            codingCount = 0,
            correctMcqCount = 0,
            correctCodingCount = 0;

        const formattedAnswers = [];

        for (const q of set.questions) {
            
            const userResponse = Array.isArray(answers)
                ? answers.find(ans => ans?.question && q.questionTitle === ans.question)
                : null;
        
            if (!userResponse || userResponse.answer === null) {
                console.log(`No valid response found for question: ${q.questionTitle}`);
                continue; // Skip the question because giving errord]s
            }
        
            const questionType = userResponse?.questionType?.toLowerCase();
        
            switch (questionType) {
                case "mcq":
                    mcqCount++;
                    if (userResponse.answer === q.correctAnswer) {
                        correctMcqCount++;
                    }
                    break;
        
                case "coding":
                    codingCount++;
                    if (!q.testCase || !Array.isArray(q.testCase) || q.testCase.length === 0) {
                        console.error(`Invalid test case format for question: ${q.questionTitle}`);
                        throw new Error("Invalid test case format");
                    }
        
                    const formattedTestCases = q.testCase.map(tc => [tc.input.toString(), tc.expectedOutput.toString()]);
        
                    if (!userResponse.answer || typeof userResponse.answer !== "string") {
                        console.error(`Invalid user response for question: ${q.questionTitle}`);
                        continue;
                    }
        
                    try {
                        const result = await executeCode(userResponse.answer, codingQueLang, formattedTestCases);
                        if (result && result.passedCases === q.testCase.length) {
                            correctCodingCount++;
                        }
                    } catch (err) {
                        console.error(`Error during code execution for question: ${q.questionTitle}`, err.message);
                        throw new Error("Code execution failed");
                    }
                    break;
        
                case "theoretical":
                    theoryCount++;
                    break;
        
                default:
                    console.log(`Unknown question type: ${questionType}`);
            }
        
            formattedAnswers.push({
                questionTitle: q.questionTitle,
                questionType: q.typeOfQuestion,
                userResponse: userResponse?.answer || "Not Answered",
            });
        }
        
        


const newUserAns = await userAnswer.create({
            userId,
            interviewSetId,
            answers: formattedAnswers,
            status: "submitted",
        });


        if (!newUserAns) {
            console.error("Error: User answer not found.");
            return res.status(400).json({ success: false, message: "User answer not found." });
        }
        

        let totalScore = correctCodingCount + correctMcqCount;

    await Promise.all([
            

            

            promptFinder(newUserAns._id)
                .then(async (aiFeedback) => {
                    console.log("AI evaluation completed:", aiFeedback);
                

                    const newAiEvaluations = aiFeedback.aiFeedback.map(feedback => ({
                        userId: userId,
                        userAnswerId: newUserAns._id,  
                        questionTitle: feedback.questionTitle,
                        questionType: feedback.questionType,
                        userAnswer: feedback.userAnswer,
                        feedback: feedback.feedback,
                        remark: feedback.remark,
                    }));
                    
                    await aiEvaluationNew.insertMany(newAiEvaluations);
                    
                })
                .catch(err => console.error("Error in AI evaluation:", err)),

        ]);

        return res.status(201).json({
    success: true,
            message: "Answers submitted successfully",
            data: newUserAns,
        });
    } catch (error) {
        console.error("Error in userEvaluation:", error.message);
        return res.status(500).json({
    success: false,
            message: "Something went wrong while creating the answer entry",
        });
    }
};
