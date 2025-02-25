import dotenv from "dotenv"
import {GoogleGenerativeAI} from "@google/generative-ai"

dotenv.config();

//create instance of generative AI


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({model : "gemini-2.0-flash"});

// process 10000 lines of code

export const generateContent = async(fullprompt)=>
{
    try {
        console.log("Prompt sent:", fullprompt);
        const result = await model.generateContent(fullprompt);
        const response = result.response.candidates[0].content.parts[0].text;
        return response;
    } catch (error) {
        console.error("AI Service Error:", error);
        throw new Error("AI service failed to generate content");
    }

}






