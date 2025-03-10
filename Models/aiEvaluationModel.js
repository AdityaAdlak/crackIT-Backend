import mongoose from "mongoose";
import { userAnswer } from "./userAttemptAnswers.js";

const aiEvaluationSchema = new mongoose.Schema({

    userAnswerId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userAnswer",
        required : true,
    },

    aiFeedback : [
        {
            questionTitle : {
            type : String,
            required : true
            },

            questionType : {
                type : String,
                enum : ["mcq","theoretical","coding"],
                required : true
            },

            userAnswer : {
                type : String,
                required : true
            },

            feedback : {
                type : String,
                required : true
            },

            remark : {
                type : Number,
                min : 0,
                max : 5,
                required : true
            }
        }
    ],

    evaluatedAt : {
        type : Date,
        default : Date.now(),
        required : true
    }
})

const aiEvaluation = mongoose.model("aiEvaluation",aiEvaluationSchema);
export {aiEvaluation};