
import { userAnswer } from "../Models/userAttemptAnswers.js";
import { interviewSet } from "../Models/interviewModel.js";
import { promptFinder } from "../AI/ai.controller.js";

export const userEvaluation = async(req,res)=>{
    try {
        const {userId , interviewSetId , answers} = req.body;

        const set = await interviewSet.findById(interviewSetId);

        if(!set)
        {
            return res.status(404).json({
                success : false,
                message : "Interview set not found!"
            })
        }


       const formattedAnswer = set.questions.map((q)=>{
        const userResponse = answers.find(ans => q.questionTitle === ans.questionTitle);
        return {
            questionTitle : q.questionTitle,
            questionType : q.typeOfQuestion,
            userResponse : userResponse ? userResponse.response : null
        }
        
       })

        const newUserAns = await userAnswer.create({
            userId , 
            interviewSetId,
            answers : formattedAnswer,
            status : "submitted"
        })

        res.status(201).json({
            success : true,
            message : "Answers submitted successfully...",
            data : newUserAns 
        });

           
        

        promptFinder(newUserAns._id).then((aiFeedback)=>{
            console.log("Ai evaluation done..", aiFeedback)
        }).catch(err => console.log("Error in AI evaluation...",err))

      

    } catch (error) {
        return res.status(500).json(
            {
                message : "Something went wrong in creating Answer Entry...",
                success : false
            }
        )
    }
}