import './slider.css';

export default function Carousel() {
    const images = [
      "https://picsum.photos/id/1018/900/500",
      "https://picsum.photos/id/1015/900/500",
      "https://picsum.photos/id/1019/900/500",
      "https://picsum.photos/id/1024/900/500",
      "https://picsum.photos/id/1039/900/500",
    ];


    return (
        <div className="carousel">
            {/* style={{transform: 'translateX(-200%)'}} */}
            {/* // overflow hidden to hide the images that are not in view (thus no scroll) */}
            <div className="slider"   style={{width: "1000px", overflow: "hidden", margin: "10px auto"}}>
                    {images.map((image, index) =>  <img key={index} src={image} alt={`Slide ${index + 1}`} />
                    )}
            </div>

            <section className="controls">
                <span style={{fontSize: '2rem'}}>⬅ </span>
                <div style={{display: 'flex', gap: '2rem'}}>
                    {images.map((_, index) => {
                        return <div className="dot" key={index} style={{fontSize: '2rem'}}></div>
                    })}
                </div>
                <span style={{fontSize: '2rem'}}>➡</span>
            </section>
        </div>
    )
    
}