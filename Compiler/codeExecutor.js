
import os from "os";
import { promisify } from "util";
import { exec } from "child_process";
import fs from "fs";

const execPromise = promisify(exec); 

export const executeCode = async (code, lang, input) => {
    const fileName = `code.${lang}`;
    const inputFile = `input.txt`;

    
    console.log("Received input:", JSON.stringify(input, null, 2));

    if (!input || !input.test_cases || !Array.isArray(input.test_cases)) {
        throw new Error("Invalid input format: 'test_cases' is missing or not an array.");
    }

    let formattedInput = input.test_cases.length + "\n";
    input.test_cases.forEach(test => {
        if (!test.array || !Array.isArray(test.array) || test.target === undefined) {
            throw new Error("Invalid test case format.");
        }
        formattedInput += test.array.length + " " + test.array.join(" ") + " " + test.target + "\n";
    });

    fs.writeFileSync(fileName, code);
    fs.writeFileSync(inputFile, formattedInput);

    let command;
    const isWindows = os.platform() === "win32";

    switch (lang) {
        case "c":
            command = isWindows
                ? `gcc ${fileName} -o output.exe && output.exe < ${inputFile}`
                : `gcc ${fileName} -o output && ./output < ${inputFile}`;
            break;
        case "cpp":
            command = isWindows
                ? `g++ ${fileName} -o output.exe && output.exe < ${inputFile}`
                : `g++ ${fileName} -o output && ./output < ${inputFile}`;
            break;
        case "py":
            command = `python ${fileName} < ${inputFile}`;
            break;
        case "java":
            command = isWindows
                ? `javac ${fileName} && java ${fileName.replace(".java", "")} < ${inputFile}`
                : `javac ${fileName} && java ${fileName.replace(".java", "")} < ${inputFile}`;
            break;
        case "js":
            command = `node ${fileName} < ${inputFile}`;
            break;
        default:
            throw new Error("Unsupported language");
    }

    try {
        console.log("Executing command:", command);
        const { stdout, stderr } = await execPromise(command);

        console.log("Execution Output:", stdout);
        console.error("Execution Error:", stderr);

        return { output: stdout.trim() || stderr.trim() };
    } catch (error) {
        console.error("Execution failed:", error);
        return { error: error.stderr || error.message || "Execution failed" };
    } finally {
  
        try {
            fs.unlinkSync(fileName);
            fs.unlinkSync(inputFile);
        } catch (cleanupError) {
            console.error("Cleanup failed:", cleanupError);
        }
    }
};
