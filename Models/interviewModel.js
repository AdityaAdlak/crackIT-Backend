import mongoose from "mongoose"

const questionSchema = new mongoose.Schema({
    
    questionTitle : {
        type : String,
        required : true,
    },

    example : {
        input : {
            type : mongoose.Schema.Types.Mixed
        },
        output : {
            type : mongoose.Schema.Types.Mixed
        }
    },

    testCase : {
        type : [
            {
                input : {
                    type : mongoose.Schema.Types.Mixed
                },
                expectedOutput : {
                    type : mongoose.Schema.Types.Mixed
                }
            }
        ]
    },

    options : [
        {
        type : String,
        }
    ],

    correctAnswer : {
        type: String
    },

    typeOfQuestion : {
        type : String,
        enum : ["mcq","theoretical","coding"],
        required : true
    },

    subject : {
        type : String,
        required : true
    },

    difficultyLevel : {
        type : String,
        enum : ["easy","medium","hard"]
    }
});

// custom method
questionSchema.methods.toPublicJSON = function () {
    const questionObject = this.toObject();
    delete questionObject.testCase;  // Hide the test cases
    return questionObject;
};


const interviewSetSchema = new mongoose.Schema({
    setDifficulty : {
        type : String,
        enum : ["Easy","Medium","Hard"],
        required : true
    },

    setNumber : {
        type : String,
        required : true
    },
    time : {
        type : Number,
        required : true
    },

    questions : [questionSchema],

    
})

const interviewSet = mongoose.model("interviewSet" , interviewSetSchema);
export {interviewSet}