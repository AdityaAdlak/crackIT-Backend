import mongoose from "mongoose";
import { interviewSet } from "./interviewModel.js";

const userAnswerSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        reequired : true
    },

    interviewSetId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "interviewSet",
        required : true
    },

    status: {
        type: String,
        enum: ["submitted", "evaluated", "timeout", "notSubmitted"],
        default: "notSubmitted"
    },

    answers: [
        {
            questionTitle: { type: String, required: true },  
            questionType: { 
                type: String, 
                enum: ["mcq", "theoretical", "coding"], 
                required: true 
            },
            userResponse: mongoose.Schema.Types.Mixed, 
        }
    ],

    attemptDate : {
        type : Date,
        default : Date.now()
    }
})

const userAnswer = mongoose.model("userAnswer",userAnswerSchema);
export {userAnswer};