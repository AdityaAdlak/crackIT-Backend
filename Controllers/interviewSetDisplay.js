


import { interviewSet } from "../Models/interviewModel.js";
import { v4 as uuidv4 } from 'uuid';

export const interview_set_levelwise = async (req, res) => {
    try {
        const { setDifficulty } = req.params;

      
        const interviewSets = await interviewSet.find({ setDifficulty: setDifficulty }).limit(10);

        if (!interviewSets || interviewSets.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No interview sets found...",
            });
        }

        const formattedData = interviewSets.map((e) => ({
       
            setNumber: uuidv4(),
            setDifficulty: e.setDifficulty,
            questionCount: e.questions.length,
            totalTime: e.time,
            setId : e._id,
           


            theoreticalQuestions : e.questions.filter(q=>q.typeOfQuestion === "theoretical")
            .map(q=>({
                question : q.questionTitle,
                questionType : q.typeOfQuestion || "unknown"
            })),


            mcqQuestions : e.questions.filter(q=>q.typeOfQuestion === "mcq")
            .map(q=>({
                questionId : q._id.toString(),
                question : q.questionTitle,
                options : q.options || [],
                correctOption : q.correctAnswer,
                questionType : q.typeOfQuestion || "unknown",
            })),

            


           

        codingQuestions: e.questions
    .filter(q => q.typeOfQuestion === "coding")
    .map(q => ({
        questionTitle: q.questionTitle,
        questionId : q._id.toString(),
        questionType : q.typeOfQuestion || "unknown",
        example: q.example || "",



testCases: Array.isArray(q.testCase)
    ? q.testCase.map(tc => {
        console.log("Raw Test Case:", tc);  
        
        return {
            input: JSON.stringify(tc.input) || "Invalid input",
            expectedOutput: tc.expectedOutput !== undefined && tc.expectedOutput !== null
                ? JSON.stringify(tc.expectedOutput)  
                : "Invalid output"
        };
    })
    : []

    }))

   


}))


        
          
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
