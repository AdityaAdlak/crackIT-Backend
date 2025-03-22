import express from "express";
const router = express.Router();
import {signup , login} from "../Controllers/userAuth.js"
import {auth} from "../Middlewares/AuthnAndAuthz.js"
// import { getUserData } from "../Controllers/userController.js";
import {promptFinder} from "../AI/ai.controller.js"
import {interview_set_levelwise} from "../Controllers/interviewSetDisplay.js"
import {userEvaluation} from "../Controllers/userAnswerEvaluation.js"
import {codeExecution} from "../Controllers/compilerController.js"
import {finalAnalytics} from "../Controllers/finalUserAnalytics.js"
import {AskAnything} from "../Controllers/AiAskController.js"

// router.get("/get-user-data",auth,(req,res)=>{
//     getUserData(req,res);
// })

router.post("/askAi",(req,res)=>{
    AskAnything(req,res)
})

router.get("/userAnalytics/:userId",(req,res)=>{
    finalAnalytics(req,res);
})

router.post("/submit",(req,res)=>{
    userEvaluation(req,res);
})

router.get("/interviewSetShow/:setDifficulty",(req,res)=>{
    interview_set_levelwise(req,res)
})

router.get("/aifeedbackresponse",(req,res)=>{
    promptFinder(req,res)
})

router.post("/signup",(req,res)=>{
    signup(req,res);
});

router.post("/login",(req,res)=>{
    login(req,res);
});

router.get("/test",auth  , (req,res)=>{
    res.status(200).json({
        success : true,
        message : "Logged in successfully..."
    });
}) 

router.get("/entry",(req,res)=>{
    createEntry(req,res);
})


router.post("/execute", (req, res) => {
    codeExecution(req,res)
});
export {router};