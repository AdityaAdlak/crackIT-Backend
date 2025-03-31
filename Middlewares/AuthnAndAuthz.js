import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
    try {
        const token = req.header("Authorization")?.split(" ")[1]; 


        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication required. Please log in.",
            });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;  
            next();
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token. Please log in again.",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Authentication failed due to a server error.",
        });
    }
};
