import mongoose from "mongoose";

const userLogin = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },

    password : {
        type : String,
        required : true
    },
})
const Login = mongoose.model("Login",userLogin);
export {Login}