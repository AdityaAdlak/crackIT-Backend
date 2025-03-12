

import {UserAnalytics} from "../Models/AnalyticsModel.js";

export const finalAnalytics = async(req,res)=>{
    try {
        const {userId} = req.params;

        if(!userId)
        {
            return res.status(401).json({
                message : "Enter correct userId..."
            })
        }

        const analytics = await UserAnalytics.findOne({userId});

        if(!analytics)
        {
            return res.status(401).json({
                success : false,
                message : "Analytics not found..."
            })
        }

        return res.status(201).json({
            success : true,
            message : "Analytics founded...",
            data : analytics
        })
    } catch (error) {
        console.log(error);
        return res.status(201).json({
            success : false,
            message : "Analytics Not founded...",
        })
    }
}