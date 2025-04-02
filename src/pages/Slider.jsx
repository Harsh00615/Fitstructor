import React, { useState, useEffect } from "react";
import "../pages/CSS/slider.css";

import hoodies from "../components/Assets/hoodies.jpg";
import newdumbells from "../components/Assets/dumbells.jpg";

// const images = [
//   "shadow.jpg",
//   "newdumbells.jpg",
// ];
// const images = [
//   "/images/shadow.jpg", "/images/dumbells.jpg"
// ];
const images = [
  require("../components/Assets/hoodies.jpg"),
  require("../components/Assets/dumbells.jpg"),
];

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
         <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
          ></span>
        ))}
      </div>
    </div>
    </div>
  )
}
