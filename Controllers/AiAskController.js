import {generateContent} from "../AI/ai.service.js"

export const AskAnything = async(req,res)=>{
    try {
        const prompt =  req.body;


        const result = await generateContent(prompt);

        // execution stops until not get resolve or reject state

        console.log(result)

        if(!result)
        {
            return res.status(401).json({
                success : false,
                message : "Response not provided by AI..."
            })
        }

        return res.status(201).json({
            success : true,
            message : "Response provided by AI...",
            data : result
        })

    } catch (error) {
        console.log(error);
        return res.status(401).json({
            success : false,
            message : "Something went wrong generating response from AI..."
        })
    }
}