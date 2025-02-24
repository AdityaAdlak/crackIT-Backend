import mongoose from "mongoose";

const userAttemptSchema = new mongoose.model({
    userID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    interviewSetId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "interviewSet",
        required : true
    },

    score : {
        type : Number
    },

    attemptedOn : {
        type : Date,
        default : Date.now()
    }

})

const userAttempt = mongoose.model("userAttempt", userAttemptSchema);
export {userAttempt}