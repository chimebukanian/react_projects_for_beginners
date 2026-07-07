import { useState } from "react"

export default function AiSugg() {

    let AiSuggestion = "Be upright in activities today"
    let [status, setStatus] =  useState("click the above button to get Ai suggestion")
    let [disabled, setDisabled] = useState(false)

    function getSuggestion() {
        setDisabled(true)

        setTimeout(()=> {
            setStatus(AiSuggestion)
            setDisabled(false)
        }, 1500)
    }

    return (
        <div>
            <h2>Try Our AI</h2>
            <button disabled={disabled} onClick={() => getSuggestion()}>
                {disabled ? "Thinking..." : "Get Suggestion"}    
            </button>

            <p>{status} </p>
        </div>
    )
}