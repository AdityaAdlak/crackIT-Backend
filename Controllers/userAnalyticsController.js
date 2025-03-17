

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



// export const totalAttempted = async (userId, { correctMcqCount, correctCodingCount, totalScore, interviewSetId }) => {
//     try {
//         console.log("In totalAttempted coding, mcq and totalCount = ", correctCodingCount, correctMcqCount);

//         if (correctCodingCount == null || correctMcqCount == null || totalScore < 0) {
//             console.log("Enter All Entries");
//             return;
//         }

//         // 🔥 Get existing user analytics
//         const existingAnalytics = await UserAnalytics.findOne({ userId });

//         let newCorrectMcqCount = correctMcqCount;
//         let newCorrectCodingCount = correctCodingCount;

//         if (existingAnalytics) {
//             // ✅ Prevent double counting by checking existing correct counts
//             if (existingAnalytics.correctMCQ + correctMcqCount > existingAnalytics.totalMCQ) {
//                 newCorrectMcqCount = existingAnalytics.totalMCQ - existingAnalytics.correctMCQ;
//             }

//             if (existingAnalytics.correctCoding + correctCodingCount > existingAnalytics.totalCoding) {
//                 newCorrectCodingCount = existingAnalytics.totalCoding - existingAnalytics.correctCoding;
//             }
//         }

//         console.log(`New Correct MCQ: ${newCorrectMcqCount}, New Correct Coding: ${newCorrectCodingCount}`);

//         // 🔥 Update only if there are new unique correct answers
//         if (newCorrectMcqCount > 0 || newCorrectCodingCount > 0) {
//             const updatedUser = await UserAnalytics.findOneAndUpdate(
//                 { userId },
//                 {
//                     $inc: {
//                         correctMCQ: newCorrectMcqCount > 0 ? newCorrectMcqCount : 0,
//                         correctCoding: newCorrectCodingCount > 0 ? newCorrectCodingCount : 0,
//                     },
//                 },
//                 { new: true, upsert: true }
//             );

//             if (updatedUser) {
//                 await UserAnalytics.findOneAndUpdate(
//                     { userId },
//                     {
//                         $push: {
//                             improvementOverTime: {
//                                 date: new Date(),
//                                 score: totalScore
//                             }
//                         }
//                     },
//                     { new: true }
//                 );
//             }
//         }

//     } catch (error) {
//         console.log("Error in creating Total Attempted and Correct Entry...", error);
//     }
// };
