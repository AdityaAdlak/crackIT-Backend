
// we can implement retry mechanism using Exponential backoff

import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

// Create instance of generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// Process 10000 lines of code

export const generateContent = async (fullprompt) => {
  try {
    if (!fullprompt || typeof fullprompt !== "string") {
      console.log("Enter prompt first");
      return null; // Return null to indicate an error, consistent with other error handling
    }

    return await generateContentWithRetry(model, {
      contents: [
        {
          role: "user",
          parts: [{ text: fullprompt }],
        },
      ],
    });

  } catch (error) {
    console.error("AI Service Error:", error);
    throw new Error("AI service failed to generate content");
  }
};

async function generateContentWithRetry(model, request, maxRetries = 3, delay = 1000) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const result = await model.generateContent(request);

            if (!result.response || !result.response.candidates || result.response.candidates.length === 0) {
                console.error("No AI response received!");
                return null;
            }

            return result.response.candidates[0].content.parts[0].text;

        } catch (error) {
            if (error.status === 503) {
                console.error(`Retry ${retries + 1} failed: ${error.message}`);
                retries++;
                await new Promise((resolve) => setTimeout(resolve, delay));
                delay *= 2; // Exponential backoff
            } else {
                throw error; // Re-throw non-503 errors
            }
        }
    }
    throw new Error("Max retries exceeded");
}