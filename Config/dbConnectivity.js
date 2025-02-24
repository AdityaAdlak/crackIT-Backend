import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// promises

const connection = async()=>{
    const DB_URL = process.env.DB_URL;

    await mongoose.connect(DB_URL).then(()=>{console.log("DataBase Connected Successfully...")})
    .catch(()=>{console.log("Error in connecting DataBase...")
    process.exit(1)})
}

export {connection};