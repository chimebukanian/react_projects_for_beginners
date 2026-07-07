import { useState } from "react";

export default function PaintDot() {

    const [pos, setPos] = useState({});

    const styles = {
        position: "absolute",
        top: `${pos.pageY}px`,
        left: `${pos.pageX}px`,
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        background: "pink",
        transform: "translate(-50%, -50%)"
    };

    const containerStyle = {
        position: "relative",
        height: "100vh",
        background: "white",
        overflow: "hidden",
        touchAction: "none"
    };

    return (
        <div
            style={containerStyle}
            onTouchStart={(event) =>
                setPos(event.changedTouches[0])
            }
        >

            <h1>
                X: {pos.pageX}
                <br /><br />
                Y: {pos.pageY}
            </h1>

            <div style={styles}></div>

        </div>
    );
}