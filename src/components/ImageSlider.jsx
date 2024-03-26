import { useState } from "react";
import { useEffect } from "react";

export const ImageSlider = () => {

  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    "./public/images/hero-slider-1.jpg",
    "./public/images/hero-slider-2.jpg",
    "./public/images/hero-slider-3.jpg"
  ];

  const slideNext = () => {
    setCurrentSlidePos(prevPos =>
      prevPos === heroSliderItems.length - 1 ? 0 : prevPos + 1
    );
  };

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      slideNext();
    }, 7000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [currentSlidePos]);

  return (
    <ul className="slider-container" data-hero-slider>
      {
        heroSliderItems.map((sliderItem, index) => (
          <li
            key={index}
            className={`slider-item ${index === currentSlidePos ? "active" : ""}`}
            data-hero-slider-item
          >
            <div className="slider-bg">
              <img className="img-cover" src={sliderItem} alt={`Image ${index + 1}`} />
            </div>
            <div className="dark-overlay"></div>
          </li>
        ))
      }
    </ul>

  )
}
