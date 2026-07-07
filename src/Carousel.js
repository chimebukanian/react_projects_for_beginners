import { useState, useEffect } from "react";
import "./carousel.css";

const images = [
  "https://picsum.photos/id/1018/900/500",
  "https://picsum.photos/id/1015/900/500",
  "https://picsum.photos/id/1019/900/500",
  "https://picsum.photos/id/1024/900/500",
  "https://picsum.photos/id/1039/900/500",
];

export default function Carousel() {

  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  
  useEffect(() => {

    if (paused) return;

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % images.length);

    }, 3000);

    return () => clearInterval(interval);

  }, [paused]);



  function next(){

      setCurrent((prev)=>(prev+1)%images.length);

  }

  function previous(){

      setCurrent((prev)=>

        prev===0
        ? images.length-1
        : prev-1

      );

  }


  return (

    <div
      className="carousel"

      onMouseEnter={()=>setPaused(true)}

      onMouseLeave={()=>setPaused(false)}

    >

      <div
        className="slides"
        style={{
          transform:`translateX(-${current*100}%)`
        }}
      >

        {images.map((image,index)=>(

          <img
            key={index}
            src={image}
            alt=""
          />

        ))}

      </div>


      <button
      className="left"
      onClick={previous}
      >
      ◀
      </button>


      <button
      className="right"
      onClick={next}
      >
      ▶
      </button>



      <div className="dots">

        {images.map((_,index)=>(

          <span

            key={index}

            className={
              current===index
              ? "dot active"
              : "dot"
            }

            onClick={()=>setCurrent(index)}

          />

        ))}

      </div>

    </div>

  );
}