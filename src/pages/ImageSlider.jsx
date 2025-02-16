import React, { useState, useEffect } from "react";
import "./ImageSlider.css"; // Import the CSS file

const ImageSlider = () => {
  const [slides, setSlides] = useState([
    "box1",
    "box2",
    "box3",
    "box4",
    "box5",
    "box6",
    "box7",
    "box8",
    "box9",
    "box10",
    "box11",
    "box12",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotate();
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const rotate = () => {
    setSlides((prevSlides) => {
      const lastChild = prevSlides[prevSlides.length - 1]; // Get the last slide
      const newSlides = [lastChild, ...prevSlides.slice(0, -1)]; // Move the last slide to the beginning
      return newSlides;
    });
  };

  return (
    <div className="coontainer">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${slide} ${index === 0 ? "firstSlide" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
