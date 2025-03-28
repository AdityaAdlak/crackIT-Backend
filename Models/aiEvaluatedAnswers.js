
import mongoose from "mongoose";


const aiEvaluationFinal = new mongoose.Schema({

    userAnswerId: { type: mongoose.Schema.Types.ObjectId, ref: "userAnswer", required: true },
    
    questionTitle : {
        type : String,
        required : true
    },

    questionType : {
        type : String,
        required : true
    },

    userAnswer : {
        type : String
    },

    feedback : {
        type : String
    },

    remark : {
        type : Number
    },
    userId : {
        type : String,
        required : true
    }
})

const aiEvaluationNew = mongoose.model("aiEvaluationNew",aiEvaluationFinal);
export {aiEvaluationNew};