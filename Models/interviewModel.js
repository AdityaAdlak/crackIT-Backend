import mongoose from "mongoose"

const interviewSetSchema = new mongoose.Schema({
    difficulty : {
        type : String,
        enum : ["easy","medium","hard"],
        required : true
    },

    setNumber : {
        type : Number,
        required : true
    },

    questions : [{
        type : mongoose.Schema.Types.ObjectId ,
        ref : "Question"
    }],

    time : {
        type : Number,
        required : true
    }

})

const interviewSet = mongoose.model("interviewSet" , interviewSetSchema);
export {interviewSet}