import { useState } from "react"

export default function AiSummary () {
    let [input, setInput] = useState()
    let [output, setOutput] = useState()

    function AiSummarizer() {
        // simulateed call/fetch to an API 
        let generatedResp = `Your prompt "${input}" has been processed succesfully`
        setOutput(generatedResp)
    }
    return (
        <div>
            <input 
            placeholder="Type your prompt here"
            onChange={(event) => setInput(event.target.value)}
            style={{borderBottom: '1px solid dodgerBlue'}}
            />
                <br />
                <br />
            <button onClick={AiSummarizer}>Get Summary</button>

            <p>
                {output}
            </p>
        </div>
    )
}