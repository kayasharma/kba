// ImageSlider.jsx
import React, { useState } from "react";
import "./ImageSlider.css";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  const [activeFilter, setActiveFilter] = useState("flash-mob");

  const filters = ["flash-mob", "events"];
  const images = [
    { src: "flash/DSC_8718.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8865.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8707.JPG", alt: "flash-mob", category: "flash-mob" },

    { src: "img/one.jpg", alt: "all", category: "events" },
    { src: "img/g.jpg", alt: "all", category: "events" },
    { src: "img/b.jpg", alt: "all", category: "events" },
  ];

  const handleFilterClick = (filter) => setActiveFilter(filter);

  return (
    <div className="imagee-slider__container">
      <div className="imagee-slider__filter-container">
        {filters.map((filter) => (
          <span
            key={filter}
            className={`imagee-slider__filter-item ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="imagee-slider__gallery">
        {images
          .filter(
            (image) => activeFilter === "all" || image.category === activeFilter
          )
          .map((image, index) => (
            <div key={index} className="imagee-slider__item show">
              <div className="imagee-slider__item-inner">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
      </div>

      <div className="imagee-slider__view-more">
        <Link to="/ImageSlider" className="view-more-btn">
          View More
        </Link>
      </div>
    </div>
  );
};

export default ImageSlider;
