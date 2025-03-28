

import { UserAnalytics } from "../Models/AnalyticsModel.js";

export const createUserAnalytics = async (userId) => {
    try {
        const analytics =await UserAnalytics.create({
            userId : userId
        })

        console.log("Analytics created for user , ",userId);
    } catch (error) {
        console.log("Error in creating Analytics , ",error);
    }
}


export const totalAttempted = async (userId,{correctMcqCount , correctCodingCount, totalScore})=>{
    try {

        console.log("In totalAttempted coding , mcq and totalCount = ",correctCodingCount , correctMcqCount)
        
        if(correctCodingCount == null|| correctMcqCount== null || totalScore < 0)
        {
            console.log("Enter All Entries");
            return ;
        }

        const updatedUser = await UserAnalytics.findOneAndUpdate(  { userId }, 
            {
                // used to increament numeric values
                

                $inc: {
                    correctMCQ : correctMcqCount,
                    correctCoding : correctCodingCount,
                },
                

            },
            {
                new: true,
                upsert: true // Create if existing not found
            }
        );

        if (updatedUser) {
            await UserAnalytics.findOneAndUpdate(
                { userId },
                {
                    // used to add values in array
                    $push: {
                        improvementOverTime: {
                            date: new Date(),
                            score: totalScore
                        }
                    }
                },
                { new: true }
            );
           
   } } catch (error) {
        console.log("Error in creating Total Attempted and Correct Entry...",error)
    }
}



