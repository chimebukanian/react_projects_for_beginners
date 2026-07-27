import { useEffect, useState } from "react";
import './sliderImg.css'

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
        console.log(current)
    }

    function previous() {
        setCurrent((prev) => (prev - 1 + images.length) % images.length)
    }

    // -2, -1, 0, 1, 2
    function getOffset(index) {
        let offset = index - current

        if (offset > images.length / 2) {
            offset -= images.length
        }

        if (offset < -images.length /2) {
            offset += images.length
        }

        return offset

    }


    function getCardStyle(offset) {
        switch(offset) {
            case 0:
                return {
                    transform: "translateX(0px) translateY(40px) scale(1)",
                    zIndex: 5,
                    opacity: 1
                };
            case -1:
                return {
                    transform: "translateX(-150px) translateY(20px) scale(.85)",
                    zIndex: 4,
                    opacity: 0.9
                }
            case 1:
                return {
                    transform: "translate(150px) translateY(20px) scale(.85)",
                    zIndex: 4,
                    opacity: 0.9
                }
            case -2:
                return {
                    transform: "translateX(-230px) scale(.7)",
                    zIndex: 3,
                    opacity: 0.45
                }

            case 2:
                return {
                    transform: "translateX(230px) scale(.7)",
                    zIndex: 3,
                    opacity: 0.45

                }
            default:
                return {
                    transform: "scale(.5)",
                    opacity: 0,
                    zIndex: 1,
                    PointerEvents: "none"
                }
        }
    }
    return (
        <div className="container">
            <div className="carousel">
            {images.map((imgUrl, index) => (
                <img 
                src={imgUrl}
                key={index}
                className="card"
                style={getCardStyle(getOffset(index))}
                />
            ))}
            </div>

            <div className="nav-btn">
                <button onClick={previous} className="arrow left"> &#10094;</button>
                <div className="dots">
                    {images.map((_, index) => (
                        <span 
                           className={current === index ? "dot active" : 'dot'}
                            key={index}
                            onClick={() => setCurrent(index)}
                             >
                             
                            </span>
                    ))}
                </div>
                <button onClick={next} className="arrow right">&#10095;</button>
            </div>
            </div>
        
    )
}