import { executeCode } from "../Compiler/codeExecutor.js";

export const codeExecution = async (req, res) => {
    try {
        const { code, lang, input } = req.body;

        if (!code || !lang) {
            return res.status(401).json({
                message: "Enter Code and Language properly..."
            });
        }

        const result = await executeCode(code, lang, input); 
        return res.json(result);

    } catch (error) {
        console.error("Error occurred: ", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong in executing the program..."
        });
    }
};
