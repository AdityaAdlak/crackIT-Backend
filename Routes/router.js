import express from "express";
const router = express.Router();
import {signup , login} from "../Controllers/userAuth.js"
import {auth} from "../Middlewares/AuthnAndAuthz.js"
import {createEntry} from "../Controllers/interviewSetsEntry.js"

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

export {router};