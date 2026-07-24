import { useEffect, useState } from "react";

const images = [
  "https://picsum.photos/id/1018/900/500",
  "https://picsum.photos/id/1015/900/500",
  "https://picsum.photos/id/1019/900/500",
  "https://picsum.photos/id/1024/900/500",
  "https://picsum.photos/id/1039/900/500",
];

export default function MyCarousel() {

    let [current, setCurrent] = useState(0)
    let [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            next()
        }, 3000)

        return () => clearInterval(interval)
    }, [paused, current])

    function next() {
        setCurrent((prev) => (prev + 1) % images.length)
    }

    function previous() {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div >
            {images.map((imgUrl, index) => (
                <img 
                src={imgUrl}
                key={index}
                style={{width: '100px', height: '100px'}}
                />
            ))}

            <div style={{display: 'flex'}}>
                <br />
                <button onClick={previous}>⬅</button>
                <div>
                    {images.map((_, index) => (
                        <span 
                            style={{
                                display: 'inline-block',  //needed to display dots
                                width: '15px',
                                height: '15px',
                                backgroundColor: '#bbbb',
                                borderRadius: '50%'
                                }}
                            key={index}
                             >
                             
                            </span>
                    ))}
                </div>
                <button onClick={next}>➡</button>
            </div>
        </div>
    )
}