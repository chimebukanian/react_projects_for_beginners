import { useState } from "react";

export default function Key() {

    let [color, setColor] = useState('pink')

    return (
        <div>
            <h2>Keyboard events</h2>
            <input 
                style={{background: color}}
                onChange={(event) => setColor(event.target.value)}
            />
        </div>
    )
}