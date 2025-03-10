
    

    
import { generateContent } from "../AI/ai.service.js";
import { aiEvaluation } from "../Models/aiEvaluationModel.js";
import { userAnswer } from "../Models/userAttemptAnswers.js";

export const promptFinder = async (userAnswerId) => {
    try {
        
        const userResponse = await userAnswer.findById(userAnswerId);
        if (!userResponse) {
            console.log("Error: User answer not found.");
            throw new Error("User answer not found.");
        }

    
        const prompt = `
        You are an AI interview evaluator. Given a set of theoretical and coding questions answered by a candidate, analyze each answer carefully.
        - For theoretical questions, evaluate correctness, clarity, depth, and use of relevant examples.
        - For coding questions, check correctness, efficiency, coding style, and edge case handling.
        - Provide constructive feedback for each question.
        - Assign a remark out of 5 based on the quality of the answer.
        - Return the output in structured JSON format as shown below:
        
        { "feedback": [ { "question": "Question text", "feedback": "Your feedback", "remark": X } ] }
        
        Here is the candidate's response:
        `;

       
        const interview_set = {
            interviewSet: userResponse.answers
                .filter(ans => ans.questionType.toLowerCase() !== "mcq")
                .map(ans => ({
                    question: ans.questionTitle,
                    userAnswer: ans.userResponse,
                    type: ans.questionType
                }))
        };

       
        const fullprompt = prompt + JSON.stringify(interview_set);
        console.log("Generated AI Prompt:\n", fullprompt);

       
        const response = await generateContent(fullprompt);
        if (!response) {
            console.log("AI response is empty or undefined!");
            throw new Error("AI did not return a response...");
        }

        console.log("Raw AI Response:\n", response);

        let cleanedResponse = response.trim().replace(/^```json|```$/g, '');
        let parsedResponse;
        try {
            parsedResponse = JSON.parse(cleanedResponse);
        } catch (error) {
            console.error("Error parsing AI response:", cleanedResponse);
            throw new Error("AI response is not in valid JSON format...");
        }

        

        
        const finalResponse = parsedResponse.feedback.map((fb) => {
            const matchingQuestion = interview_set.interviewSet.find(q => q.question === fb.question);
            return {
                questionTitle: matchingQuestion?.question || "Unknown",
                questionType: matchingQuestion?.type || "Unknown",
                userAnswer: matchingQuestion?.userAnswer || "Not Provided",
                feedback: fb.feedback,
                remark: fb.remark
            };
        });

        console.log("Final AI Feedback Output:", finalResponse);

        
        const newEvaluation = await aiEvaluation.create({
            userAnswerId: userAnswerId,
            aiFeedback: finalResponse,
            evaluationOn: Date.now()
        });

        
        console.log("New AI Evaluation Saved:", newEvaluation);
        return newEvaluation;

    } catch (error) {
        console.log("Error in AI evaluation:", error.message);
        return null;
    }
};
