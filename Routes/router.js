import express from "express";
const router = express.Router();
import {signup , login, logout} from "../Controllers/userAuth.js"
import {auth} from "../Middlewares/AuthnAndAuthz.js"
import {aiEvaluationShow} from "../Controllers/getAiEvaluatedAnswers.js"
import {promptFinder} from "../AI/ai.controller.js"
import {interview_set_levelwise} from "../Controllers/interviewSetDisplay.js"
import {userEvaluation} from "../Controllers/userAnswerEvaluation.js"
import {codeExecution} from "../Controllers/compilerController.js"
import {finalAnalytics} from "../Controllers/finalUserAnalytics.js"
import {AskAnything} from "../Controllers/AiAskController.js"
import {getLatestUserAnswer} from "../Controllers/latestUserId.js"
import {updateMCQAnalytics} from "../Controllers/userAnalyticsController.js"
import {updateCodingAnalytics} from "../Controllers/userAnalyticsController.js"


router.post("/updateMcqAnalytics/:userId",(req,res)=>{
    updateMCQAnalytics(req,res);
})

router.post("/logout",(req,res)=>{
    logout(req,res);
})

router.post("/coding/:userId",(req,res)=>{
    updateCodingAnalytics(req,res);
})


router.get("/getLatestUserAnswer/:userId", (req,res)=>getLatestUserAnswer(req,res));

router.get("/getAiEvaluation/:userAnswerId",(req,res)=>{
    aiEvaluationShow(req,res);
})

router.post("/askAi",(req,res)=>{
    AskAnything(req,res)
})

router.get("/userAnalytics/:userId",auth,(req,res)=>{
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

router.get("/test",auth , (req,res)=>{
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