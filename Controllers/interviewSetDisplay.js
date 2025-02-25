import {interviewSet} from "../Models/interviewModel.js";

export const interview_set_levelwise = async(req,res)=>{
    try {
        const {setDifficulty} = req.params;

        const interviewSets = await interviewSet.find({setDifficulty :  setDifficulty});

        console.log(interviewSets)

        if(!interviewSets)
        {
            return res.status(500).json({
                success : true,
                message : "Error in fetching interview sets...",
            })
        }

        return res.status(200).json({
            success : true,
            message : "Interview sets fetched successfully...",
            data    : interviewSets
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Something went wrong , error in fetching interview sets..."
        })

    }
}