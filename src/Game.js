import { useState } from "react";

export default function Game() {
    let [count, setCount] = useState(0)

    function startGame() {
        console.log("Game Started");
        setCount(count + 1)
    }

    return (
        <div>
            <h1>You started {count} number of time(s)</h1>
            <StartGame handler={startGame} />
        </div>
    )

}


function StartGame({handler}) {
    return (
        <div>
            <button onClick={() => handler()}>Click to update count in parent</button>
        </div>
    )
}