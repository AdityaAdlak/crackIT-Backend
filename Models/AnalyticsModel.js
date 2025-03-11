import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },

    totalMCQ : {
        type : Number,
        default : 375
    },

    totalTheory : {
        type : Number,
        default : 225
    },

    totalCoding : {
        type : Number,
        default : 150
    },

    totalSolvedSets : {
        type : Number,
        default : 0
    },

    correctMCQ : {
        type : Number,
        default : 0
    },

    totalCoding : {
        type : Number,
        default : 0
    },

    totalTheory : {
        type : Number,
        default : 0
    }, 

    improvementOverTime : [
        {
            date : {
                type : Date
            },

            score : {
                type : Number
            }
        }
    ],
})

const UserAnalytics = mongoose.model("UserAnalytics",analyticsSchema);
export {UserAnalytics};