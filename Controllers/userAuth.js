import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import {Login} from "../Models/loginModel.js";
import {SignUp} from "../Models/signUpModel.js";
import {User} from "../Models/userModel.js";
import dotenv from "dotenv"
import {createUserAnalytics} from "../Controllers/userAnalyticsController.js"

dotenv.config();

export const signup = async(req,res)=>{
    try {
        const {fullName , email , password} = req.body;

        if(!fullName || !email || !password)
        {
            return res.status(400).json({
                success : false,
                message : "Please provide all required fields ..."
            })
        }

        // checking for already existing user
        const existingUser = await SignUp.findOne({email});

        if(existingUser){
            return res.status(409).json({
                success : false,
                message : "User already exists with this email ID."
            })
        }

        let hashedPass = await bcrypt.hash(password,10);

        const responseDetails = await SignUp.create({
            fullName , 
            email,
            password : hashedPass,
           
        })

        
        createUserAnalytics(responseDetails._id);

        return res.status(201).json({

            success : true,
            data : responseDetails,
            message : "User signed up successfully..."
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success : false,
            message : "Something went wrong, please try again later"
        })
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Enter mandatory fields...",
            });
        }

        let user = await SignUp.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found, please sign up first...",
            });
        }


        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
            };

            const JWT_SECRET = process.env.JWT_SECRET;

            
            const token = jsonwebtoken.sign(payload, JWT_SECRET, {
                expiresIn: "1d",
            });

            user = user.toObject();
            user.password = undefined;

            
            // res.cookie("token", token, {
            //     httpOnly: true,
            //     secure: process.env.NODE_ENV === "production",  // ✅ Only secure in production
            //     sameSite: "Lax",// ✅ Allow cross-origin requests in most cases
            //     maxAge: 24 * 60 * 60 * 1000,
            // });

            return res.status(200).json({
                success: true,
                user,
                token,
                message: "User logged in successfully.",
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Incorrect password...",
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login failed, please try again later...",
        });
    }
};


export const logout = (req, res) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
    });

    return res.status(200).json({
        success: true,
        message: "User logged out successfully.",
    });
};
