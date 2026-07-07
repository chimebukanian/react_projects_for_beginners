import { useState } from "react";

export default function Counter() {
    // a hook (function) used to track a state (data)
    let [like, setLike] = useState(0)

    return (
        <div>
            <h2>Counter with useState</h2>
            <h1>{like}</h1>

            <button onClick={() => setLike(++like)}>Like</button>
        </div>
    )
}