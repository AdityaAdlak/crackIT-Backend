import {generateContent} from "../AI/ai.service.js"
export const promptFinder = async(req,res)=>
{
    try {
    const prompt = `
    You are an AI interview evaluator. Given a set of theoretical and coding questions answered by a candidate, analyze each answer carefully.
    - For theoretical questions, evaluate correctness, clarity, depth, and use of relevant examples.
    - For coding questions, check correctness, efficiency, coding style, and edge case handling.
    - Provide constructive feedback for each question.
    - Assign a remark out of 5 based on the quality of the answer.
    - Return the output in structured JSON format as shown below:
    
    { "feedback": [ { "question": "Question text", "feedback": "Your feedback", "remark": X } ] }
    
    Here is the candidate's response:
    `;
    

    const interview_set = {
        "interviewSet": [
            {
                "question": "What is polymorphism in Object-Oriented Programming?",
                "userAnswer": "It is when a function has multiple definitions.",
                "type": "theoretical"
            },
            {
                "question": "Write a function to check if a number is prime.",
                "userAnswer": "def is_prime(n): return all(n%i!=0 for i in range(2, n))",
                "type": "coding"
            },
        ]
    }
    
    const fullprompt = prompt + JSON.stringify(interview_set);


    const response = await generateContent(fullprompt);
    console.log("AI response" , response);

    let cleanedResponse = response.trim().replace(/^```json|```$/g, '');
    // remove whitespace and ''' this to ''
    const parsedResponse = JSON.parse(cleanedResponse);


    const userAnswers = interview_set.interviewSet.map(q => ({
        userAnswer: q.userAnswer
    }));

    const finalResponse = parsedResponse.feedback.map((fb, index) => ({
        question: fb.question,
        userAnswer: userAnswers[index]?.userAnswer || "Not Provided",
        feedback: fb.feedback,
        remark: fb.remark
    }));


// json string to js object
    

    return res.status(200).json({
        success : true,
        message : "Successfull.....",
        data : finalResponse
    });

    } catch (error) {
        console.log("errornr in getting data " , error);
        return res.status(500).json({
            success : false,
            message : `Something went wrong`
        })
    }
}