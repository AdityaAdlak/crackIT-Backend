import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export const auth = (req,res,next) =>{
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith("Bearer "))
        {
            return res.status(401).json({
                success : false,
                message : "Token missing or invalid . Authentication required..."
            })
        }

        const token = authHeader.split(" ")[1];

        try {
            const decodePayload = jwt.verify(token , JWT_SECRET);
            console.log("Decoded Payload:", decodePayload);

            req.user = decodePayload;
            next();

        } catch (error) {
            console.error("Token verification error:", error);
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token. Please log in again.",
            });
        }
    } catch (error) {
        console.error("Authentication middleware error:", error);
        res.status(500).json({
            success: false,
            message: "Authentication failed due to server error.",
        });
    }
}