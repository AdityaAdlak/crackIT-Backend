import express from "express";
import dotenv from "dotenv"
dotenv.config();
import cors from "cors"
import {router} from "./Routes/router.js"
import { connection } from "./Config/dbConnectivity.js"
connection();



const app = express();

app.use(cors());
app.use(express.json())
app.use("/user/v1",router);
const PORT = process.env.PORT


app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(PORT,()=>{
    console.log("App is listening on PORT ",PORT)
})

