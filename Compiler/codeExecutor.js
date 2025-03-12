import os from "os";
import { promisify } from "util";
import { exec } from "child_process";
import fs from "fs";


export const executeCode = async (code, lang, testCases) => {
    const fileName = `code.${lang}`;
    const inputFile = `input.txt`;

    
    testCases = testCases.map(tc => {
        if (Array.isArray(tc)) {
            return {
                input: [tc[0]], 
                expectedOutput: tc[1] 
            };
        }
        return tc;
    });

    if (!testCases || !Array.isArray(testCases) || testCases.length === 0) {
        throw new Error("Invalid test cases");
    }

    
    fs.writeFileSync(fileName, code);

    let passedCases = 0;

    for (const testCase of testCases) {
        if (!Array.isArray(testCase.input) || testCase.expectedOutput === undefined) {
            throw new Error("Invalid test case format");
        }

       
        const formattedInput = testCase.input.join(" ");
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
            console.log(`Executing command: ${command}`);
            const { stdout } = await execPromise(command);

            const output = stdout.trim();

            console.log(`Expected: ${testCase.expectedOutput}, Got: ${output}`);

            if (String(output) === String(testCase.expectedOutput)) {
                passedCases++;
            } else {
                console.log(`Test case failed: ${testCase.input}`);
            }
        } catch (error) {
            console.error("Execution failed:", error);
            return { error: error.stderr || error.message || "Execution failed" };
        }
    }

    // ✅ Cleanup
    try {
        fs.unlinkSync(fileName);
        fs.unlinkSync(inputFile);
        if (os.platform() !== "win32") fs.unlinkSync("./output");
        if (os.platform() === "win32") fs.unlinkSync("./output.exe");
    } catch (cleanupError) {
        console.error("Cleanup failed:", cleanupError);
    }

    return {
        passedCases,
        totalCases: testCases.length,
        successRate: ((passedCases / testCases.length) * 100).toFixed(2) + "%",
    };
};
