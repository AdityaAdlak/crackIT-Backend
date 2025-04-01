import { UserAnalytics } from "../Models/AnalyticsModel.js";


export const createUserAnalytics = async (userId) => {
    try {
        const analytics = await UserAnalytics.create({
            userId: userId
        });
        console.log("Analytics created for user,", userId);
    } catch (error) {
        console.log("Error in creating Analytics,", error);
    }
};

export const updateMCQAnalytics = async (req, res) => {
    const { userId } = req.params;
    const { mcqAnswers } = req.body; 

    try {
        if (!Array.isArray(mcqAnswers) || mcqAnswers.length === 0) {
            return res.status(400).json(
                { message: "Invalid MCQ data" }
            );
        }

        let userAnalytics = await UserAnalytics.findOne({ userId });

        if (!userAnalytics) {
            // dynamic creation of userAnalytics
            userAnalytics = new UserAnalytics({ userId, correctMCQ: 0, mcqResponses: [] });
        }

        let newCorrectCount = 0;

     
        mcqAnswers.forEach(({ questionId, correctAnswer, userAnswer }) => {
            const existingResponse = userAnalytics.mcqResponses.find(
                (response) => response.questionId === questionId && response.isCorrect
            );

            if (!existingResponse) {  
                if (userAnswer === correctAnswer) {
                    newCorrectCount++;
                }

                
                userAnalytics.mcqResponses.push({
                    questionId,
                    correctAnswer,
                    userAnswer,
                    isCorrect: userAnswer === correctAnswer,
                    timestamp: new Date()
                });
            }
        });

        if (newCorrectCount > 0) {
            userAnalytics.correctMCQ += newCorrectCount;
            userAnalytics.improvementOverTime.push({ date: new Date(), score: userAnalytics.correctMCQ, codingScore : userAnalytics.correctCoding });
        }

        await userAnalytics.save();

        return res.status(200).json({
            success: true,
            message: "MCQ section updated",
            data: userAnalytics
        });
    } catch (error) {
        console.error("Error updating MCQ Analytics:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



export const updateCodingAnalytics = async (req, res) => {
    const { userId } = req.params;
    const { correctSolvedQuestionsIds } = req.body;

    try {
        console.log("Updating Coding Analytics for user:", userId);

        if (!Array.isArray(correctSolvedQuestionsIds)) {
            return res.status(400).json({
                message: "Invalid data format",
                success: false
            });
        }

        let userAnalytics = await UserAnalytics.findOne({ userId });

        if (!userAnalytics) {
            userAnalytics = new UserAnalytics({ userId });
        }
// initialize as array
        if (!userAnalytics.solvedCodingQuestions) {
            userAnalytics.solvedCodingQuestions = [];
        }

//   questions that were not previously stored
        const newCorrectQuestions = correctSolvedQuestionsIds.filter(questionId => 
            !userAnalytics.solvedCodingQuestions.includes(questionId)
        );

        if (newCorrectQuestions.length > 0) {
            userAnalytics.solvedCodingQuestions.push(...newCorrectQuestions);
            userAnalytics.correctCoding += newCorrectQuestions.length;
            userAnalytics.improvementOverTime.push({
                date: new Date(),
                codingScore: userAnalytics.correctCoding,
                score : userAnalytics.correctMCQ
            });
        }

        

        await userAnalytics.save();

        res.status(200).json({
            success: true,
            message: "Coding section updated",
            data: userAnalytics
        });

    } catch (error) {
        console.log("Error updating Coding Analytics:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
