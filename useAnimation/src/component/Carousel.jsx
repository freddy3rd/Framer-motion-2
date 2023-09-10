import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "../stylesheets/emble.css";
import Autoplay from "embla-carousel-autoplay";
export default function Carousel(props) {
  const { slides } = props;
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 1000 }),
  ]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={data.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
