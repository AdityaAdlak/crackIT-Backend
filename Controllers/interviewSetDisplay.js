


import { interviewSet } from "../Models/interviewModel.js";
import { v4 as uuidv4 } from 'uuid';

export const interview_set_levelwise = async (req, res) => {
    try {
        const { setDifficulty } = req.params;

        // Fetch exactly 10 sets
        const interviewSets = await interviewSet.find({ setDifficulty: setDifficulty }).limit(10);

        if (!interviewSets || interviewSets.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No interview sets found...",
            });
        }

        const formattedData = interviewSets.map((e) => ({
            // Use uuid for unique set IDs
            setNumber: uuidv4(),
            setDifficulty: e.setDifficulty,
            questionCount: e.questions.length,
            totalTime: e.time,
           


            theoreticalQuestions : e.questions.filter(q=>q.typeOfQuestion === "theoretical")
            .map(q=>({
                question : q.questionTitle,
            })),


            mcqQuestions : e.questions.filter(q=>q.typeOfQuestion === "mcq")
            .map(q=>({
                question : q.questionTitle,
                options : q.options || [],
                correctOption : q.correctAnswer
            })),

            



        

        

        codingQuestions: e.questions
    .filter(q => q.typeOfQuestion === "coding")
    .map(q => ({
        questionTitle: q.questionTitle,
        example: q.example || "",
        testCases: Array.isArray(q.testCase)
            ? q.testCase.map(tc => ({
                input: JSON.stringify(tc.input) || "Invalid input", // ✅ Convert to string
                output: JSON.stringify(tc.output) || "Invalid output" // ✅ Convert to string
            }))
            : []
    }))


}))


        console.log(formattedData)
          
        return res.status(200).json({
            success: true,
            message: "Interview sets fetched successfully...",
            data: formattedData,
        });

        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong, error in fetching interview sets...",
        });
    }
};
