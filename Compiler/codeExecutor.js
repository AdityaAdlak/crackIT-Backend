import os from "os";
import { promisify } from "util";
import { exec } from "child_process";
import fs from "fs";

const execPromise = promisify(exec);  

export const executeCode = async (code, lang, testCases) => {
    const fileName = `code.${lang}`;
    const inputFile = `input.txt`;

    if (!Array.isArray(testCases) || testCases.length === 0) {
        throw new Error("Invalid test cases format: testCases should be an array of {input, expectedOutput}");
    }

    testCases = testCases.map(tc => ({
        input: Array.isArray(tc.input) ? tc.input : [tc.input],
        expectedOutput: tc.expectedOutput
    }));

    fs.writeFileSync(fileName, code);

    let passedCases = 0;

    for (const testCase of testCases) {
        if (!Array.isArray(testCase.input) || typeof testCase.expectedOutput === "undefined") {
            throw new Error("Invalid test case structure");
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
            console.log(`Executing: ${command}`);
            const { stdout } = await execPromise(command);

            const output = stdout.trim();

            console.log(`Test Case: Input=${formattedInput}, Expected=${testCase.expectedOutput}, Got=${output}`);

            if (output === String(testCase.expectedOutput)) {
                passedCases++;
            }
        } catch (error) {
            console.error("Execution failed:", error);
            return { error: error.stderr || error.message || "Execution failed" };
        }
    }

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
