import { UserAnalytics } from "../Models/AnalyticsModel.js";

export const finalAnalytics = async (req, res) => {
  try {
    const { userId } = req.params;

    console.log("Received userId:", userId);

    if (!userId) {
      return res.status(400).json({
        message: "Enter a valid userId...",
      });
    }

    
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not logged in",
      });
    }

    const analytics = await UserAnalytics.findOne({ userId });

    if (!analytics) {
      return res.status(404).json({
        success: false,
        message: "Analytics not found...",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Analytics found...",
      data: analytics,
    });
  } catch (error) {
    console.log("Error fetching analytics:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
