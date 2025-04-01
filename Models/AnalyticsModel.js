import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SignUp",
        required: true
    },

    totalMCQ: {
        type: Number,
        default: 750
    },

    totalTheory: {
        type: Number,
        default: 450
    },

    totalCoding: {
        type: Number,
        default: 300
    },

    correctMCQ: {
        type: Number,
        default: 0
    },

    

    improvementOverTime: [
        {
            date: {
                type: Date,
                default: Date.now
            },

            score: {
                type: Number,
                default : 0
            },


            codingScore: { type: Number, default: 0 }
        }
    ],

    correctCoding: { type: Number, default: 0 },

    solvedCodingQuestions: [{ type: String }],


    mcqResponses: [
        {
            questionId: String, 
            correctAnswer: String,
            userAnswer: String,
            isCorrect: Boolean,
            timestamp: { type: Date, default: Date.now }
        }
    ]
});

const UserAnalytics = mongoose.model("UserAnalytics", analyticsSchema);
export { UserAnalytics };
