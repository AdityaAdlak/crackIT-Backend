import mongoose from "mongoose";

// Check box for branch

const userSignUp = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },

})

const SignUp = mongoose.model("SignUp",userSignUp);
export {SignUp};