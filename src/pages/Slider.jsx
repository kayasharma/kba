import React, { useState } from "react";
import "./Slider.css"; // Assuming your CSS is in App.css
import "./"
const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(3); // Starting with the 4th image as active

  const sliderData = [
    { src: "images/back.jpg", name: "Mike", role: "web3 Developer" },
    { src: "images/back.jpg", name: "samite", role: "wordpress Developer" },
    { src: "images/back.jpg", name: "hashi", role: "java Developer" },
    { src: "images/back.jpg", name: "kaity", role: "web Developer" },
    { src: "images/back.jpg", name: "lauren", role: "php Developer" },
    { src: "images/back.jpg", name: "ryan", role: "seo Developer" },
    { src: "images/back.jpg", name: "dakes", role: "sql Developer" },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="slider-container">
      <div className="slider-images">
        {sliderData.map((item, index) => (
          <div
            key={index}
            className={`slider-img ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <img src={item.src} alt={item.name} />
            <h1>{item.name}</h1>
            <div className="details">
              <h2>{item.name}</h2>
              <p>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
