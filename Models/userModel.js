import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
        minlength : 6
    },

    role : {
        type : String,
        enum : ["user","admin"],
        default : "user",
    },

    progress : {
        easy : {type : Number , default : 0},
        medium : {type : Number , default : 0},
        hard : {type : Number , default : 0}
    },

    createdAt : {
        type : Date,
        default : Date.now,
    },
},{timestamps : true})


const User = mongoose.model("User",userSchema);
export {User};