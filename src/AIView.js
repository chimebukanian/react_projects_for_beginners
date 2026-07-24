import OpenAI from "openai";
import { useState } from "react";

export default function AIView() {

    let [prompt, setPrompt] = useState("")
    let [loading, setLoading] = useState(false)
    let [error, setError] = useState("")
    let [response, setResponse] = useState("")

    const client = new OpenAI({
        apiKey: process.env.REACT_APP_API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
        dangerouslyAllowBrowser: true
    });

    let sendReq = async () => {
        if (!prompt) {
            setError("No input/prompt, you must enter a promt")
            return;
        }
        setLoading(true)
        const response = await client.responses.create({
        model: "openai/gpt-oss-20b",
        input: prompt,
        });
    
    setResponse(response.output_text)
    setLoading(false)
    }

    return (
        <div>
            <input 
            placeholder="enter prompt e.g What is react?"
            onChange={(event) => setPrompt(event.target.value)}
            />
            <br />
            <button onClick={sendReq}>{loading ? "processing.." : "enter"}</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {loading && <p>Generating response...</p>}
            {!loading && !error && <p>{response}</p>}
        </div>
    )
}