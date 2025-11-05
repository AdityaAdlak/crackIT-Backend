



import { generateContent } from "../AI/ai.service.js";
import { aiEvaluation } from "../Models/aiEvaluationModel.js";
import { userAnswer } from "../Models/userAttemptAnswers.js";

export const promptFinder = async (userAnswerId) => {
    try {
        console.log(`Starting AI evaluation for userAnswerId: ${userAnswerId}`);

        
        const userResponse = await userAnswer.findById(userAnswerId);
        if (!userResponse) {
            console.error("Error: User answer not found.");
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

        // Filter out non-MCQ answers
        const interviewSet = userResponse.answers
            .filter(ans => ans.questionType.toLowerCase() !== "mcq")
            .map(ans => ({
                question: ans.questionTitle,
                userAnswer: ans.userResponse,
                type: ans.questionType
            }));

        if (interviewSet.length === 0) {
            console.warn("Warning: No non-MCQ answers found for evaluation.");
            throw new Error("No valid answers for evaluation.");
        }

        const fullPrompt = prompt + JSON.stringify({ interviewSet });

       


        console.log("Generated AI Prompt:\n", fullPrompt);


        // Call AI API
        console.log("Sending request to AI API...");
        const response = await generateContent(fullPrompt);

        if (!response) {
            console.error("Error: AI response is empty or undefined!");
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

        
        if (!parsedResponse.feedback || !Array.isArray(parsedResponse.feedback)) {
            console.error("Error: AI response does not contain valid feedback array.");
            throw new Error("AI feedback format is incorrect.");
        }

        
        const finalResponse = parsedResponse.feedback.map((fb) => {
    const matchingQuestion = interviewSet.find(q => q.question === fb.question);

    return {
        questionTitle: matchingQuestion?.question || "Untitled Question",
        questionType: matchingQuestion?.type && ["theoretical", "coding"].includes(matchingQuestion.type.toLowerCase())
            ? matchingQuestion.type
            : "theoretical", 
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
        console.error("Error in AI evaluation:", error.message);
        return null;
    }
};

