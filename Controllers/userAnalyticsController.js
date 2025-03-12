

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


export const totalAttempted = async (userId,{mcqCount , theoryCount , codingCount ,correctMcqCount , correctCodingCount})=>{
    try {




        if(!mcqCount || !theoryCount || !codingCount || !correctCodingCount || !correctMcqCount)
        {
            console.log("Enter All Entries");
            return ;
        }

       


        const updatedUser = await UserAnalytics.findOneAndUpdate(  { userId }, 
            {
                $inc: {
                    totalMCQ: mcqCount,       
                    totalTheory: theoryCount, 
                    totalCoding: codingCount,
                    correctMcqCount : correctMcqCount,
                    correctCodingCount : correctCodingCount
                }
                // Increments the specified fields by the provided value (if the field doesn’t exist, it initializes it).
            },
            {
                new: true,
                upsert: true // Create if not found
            }
        );
        if(updatedUser)
        {
            console.log("Total Attempted and Correct entry updated...", updatedUser); 
        }


    
        
    } catch (error) {
        console.log("Error in creating Total Attempted and Correct Entry...",error)
    }
}


export const improvementOverTime = async (userId, score) => {
    try {
        if (!userId || score === undefined) {
            console.log("Enter correct userId and score");
            return;
        }

        const userAnalytics = await UserAnalytics.findOneAndUpdate(
            { userId },
            {
                // add elements in array
                $push: {
                    improvementOverTime: {
                        score: score,
                        date: new Date()
                    }
                }
            },
            { new: true }
            // return most updated document means most newly 
        );

        if (!userAnalytics) {
            console.log("User analytics not found for user:", userId);
            return;
        }

        console.log(`Improvement over time updated for user: ${userId}, score: ${score}`);
    } catch (error) {
        console.error(`Error updating improvement over time for user: ${userId}`, error.message);
    }
};
