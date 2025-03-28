import { aiEvaluationNew } from "../Models/aiEvaluatedAnswers.js";
import { userAnswer } from "../Models/userAttemptAnswers.js";

export const aiEvaluationShow = async (req, res) => {
    try {
        const { userAnswerId } = req.params;
        console.log("User ID:", userAnswerId);

        if (!userAnswerId) {
            return res.status(400).json({
                success: false,
                message: "User ID not provided",
            });
        }

        const aiEvaluations = await aiEvaluationNew.find({ userAnswerId });

        if (!aiEvaluations.length) {
            return res.status(404).json({
                success: false,
                message: "No AI evaluations found for the latest user answer",
            });
        }

        return res.status(200).json({
            success: true,
            data: aiEvaluations,
            message: "AI evaluations retrieved successfully",
        });

    } catch (error) {
        console.error("Error fetching AI evaluations:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
