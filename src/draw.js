import { useRef, useState } from "react";

export default function DrawingBoard() {

  const canvasRef = useRef(null);

  const isDrawing = useRef(false);

  const [color, setColor] = useState("red");

  const [brushSize, setBrushSize] = useState(10);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];

    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    };
  };

  const startDrawing = (e) => {
    isDrawing.current = true;

    const ctx = canvasRef.current.getContext("2d");

    const { x, y } = getCoordinates(e);

    ctx.beginPath();

    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;

    e.preventDefault();

    const ctx = canvasRef.current.getContext("2d");

    const { x, y } = getCoordinates(e);

    ctx.strokeStyle = color;

    ctx.lineWidth = brushSize;

    ctx.lineCap = "round";

    ctx.lineTo(x, y);

    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  return (
    <>
      <h2>Brush Size</h2>

      <button onClick={() => setBrushSize(5)}>Small</button>

      <button onClick={() => setBrushSize(10)}>Medium</button>

      <button onClick={() => setBrushSize(20)}>Large</button>

      <h2>Color</h2>

      <button onClick={() => setColor("red")}>Red</button>

      <button onClick={() => setColor("purple")}>Purple</button>

      <button onClick={() => setColor("pink")}>Pink</button>

      <canvas
        ref={canvasRef}
        width={400}
        height={500}
        style={{
          border: "2px solid black",
          touchAction: "none",
        }}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
    </>
  );
}