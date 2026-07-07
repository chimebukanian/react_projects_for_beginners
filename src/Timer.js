import { useState, useEffect } from 'react';

export default function Timer() {
    let [time, setTime] = useState(0);
    let [show, setShow] = useState(false);

    // Empty dependency array: triggers the CB function only on mounting (initial render)
    useEffect(() => {
        console.log("Timer Component mounted");

        let intervalId = setInterval(() => {
            // setTime(time + 1)
            console.log("Timer Started",)
            setTime((prevVal) => prevVal + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }

    }, [])


    return (
        <div>
            <h1>Timer: {time} seconds </h1>

            <button onClick={() => setShow(!show)}>Toggle {show ? "stop" : "start"}</button>
            
        </div>
    )
}