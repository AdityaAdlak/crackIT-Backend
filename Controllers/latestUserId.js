import { userAnswer } from "../Models/userAttemptAnswers.js";

export const getLatestUserAnswer = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const latestAnswer = await userAnswer.findOne({ userId }).sort({ createdAt: -1 });

        if (!latestAnswer) {
            return res.status(404).json({ message: "No user answer found" });
        }

        res.status(200).json({ latestUserAnswerId: latestAnswer._id }); 
    } catch (error) {
        console.error("Error fetching latest user answer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
