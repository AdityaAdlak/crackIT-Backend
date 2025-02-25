import {easySet1 , easySet2 , easySet3 , easySet4 , easySet5} from "../interviewQuestions/interviewSets/easyInterviewSets.js"
import {mediumSet1 , mediumSet2 , mediumSet3 , mediumSet4 , mediumSet5} from "../interviewQuestions/interviewSets/mediumInterviewSets.js"
import {interviewSet} from "../Models/interviewModel.js"

export const createEntry = async(req,res)=>{

    try {

        const Sets = [
            easySet1,
            easySet2,
            easySet3,
            easySet4,
            easySet5,
            mediumSet1,
            mediumSet2,
            mediumSet3,
            mediumSet4,
            mediumSet5
        ]

        let insertedSets = []
        let existingSet ; 

        for(const set of Sets)
        {
            existingSet = await interviewSet.findOne({
                setDifficulty : set.setDifficulty,
                setNumber : set.setNumber
            })
        }
            


        if(!existingSet){
        const response = await interviewSet.insertMany(
            Sets
        );
        insertedSets.push(response)
        }


        

        return res.status(200).json({
            success : true,
            message : insertedSets.length ? "New entry created successfully " : "Interview sets already exists ",
            data : insertedSets
        })
    }

    catch (error) {
        console.log(error);
        return res.status(500).json({
            success : false,
            message : "Error in creating interviewSet entry..."
        })
    }
}