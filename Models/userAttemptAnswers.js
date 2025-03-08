import mongoose from "mongoose";

const userAnswerSchema = new mongoose.Schema({

})

const userAnswer = mongoose.model("userAnswer",userAnswerSchema);
export {userAnswer};