import { executeCode } from "../Compiler/codeExecutor.js";

export const codeExecution = async (req, res) => {
    try {
        console.log("Request Body:", JSON.stringify(req.body, null, 2));
        const { code, lang, testCases } = req.body;

        if (!code || !lang || !Array.isArray(testCases)) {
            return res.status(401).json({
                message: "Invalid input format. Provide code, lang, and testCases as an array."
            });
        }

        const result = await executeCode(code, lang, testCases); 
        return res.json(result);

    } catch (error) {
        console.error("Error occurred: ", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong in executing the program..."
        });
    }
};
