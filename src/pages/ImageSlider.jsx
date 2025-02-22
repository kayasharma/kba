// ImageSlider.jsx
import React, { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "flash-mob", "events"];
  const images = [
    { src: "img/aaa.jpg", alt: "all", category: "all" },

    { src: "flash/DSC_8707.JPG", alt: "flash-mob", category: "flash-mob" },

    { src: "img/ccc.jpg", alt: "all", category: "all" },
    { src: "flash/DSC_8723.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8743.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8748.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "img/four.jpg", alt: "all", category: "all" },
    { src: "img/g.jpg", alt: "all", category: "all" },
    { src: "img/jj.jpg", alt: "all", category: "all" },

    { src: "img/kk.jpg", alt: "all", category: "all" },
    { src: "flash/DSC_8965.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8972.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8976.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9010.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9025.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8718.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9026.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9029.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9033.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "img/e.jpg", alt: "all", category: "all" },
    { src: "flash/DSC_9037.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "img/one.jpg", alt: "all", category: "all" },
    { src: "img/thre.jpg", alt: "all", category: "all" },
    { src: "img/two.jpg", alt: "all", category: "all" },
    { src: "img/jjj.jpg", alt: "all", category: "events" },
    { src: "flash/DSC_8707.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8711.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8718.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8723.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8743.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8748.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8754.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8760.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8761.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8784.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8805.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8809.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8820.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8828.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8865.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8869.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8901.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8906.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8919.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "img/b.jpg", alt: "all", category: "all" },
    { src: "flash/DSC_8927.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8940.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8945.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8952.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_8955.JPG", alt: "flash-mob", category: "flash-mob" },

    { src: "flash/DSC_9042.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9100.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9108.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9115.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "flash/DSC_9126.JPG", alt: "flash-mob", category: "flash-mob" },
    { src: "img/aaa.jpg", alt: "all", category: "events" },
    { src: "img/b.jpg", alt: "all", category: "events" },
    { src: "img/ccc.jpg", alt: "all", category: "events" },
    { src: "img/e.jpg", alt: "all", category: "events" },
    { src: "img/four.jpg", alt: "all", category: "events" },
    { src: "img/g.jpg", alt: "all", category: "events" },
    { src: "img/jj.jpg", alt: "all", category: "events" },
    { src: "img/jjj.jpg", alt: "all", category: "events" },
    { src: "img/kk.jpg", alt: "all", category: "events" },
    { src: "img/one.jpg", alt: "all", category: "events" },
    { src: "img/thre.jpg", alt: "all", category: "events" },
    { src: "img/two.jpg", alt: "all", category: "events" },
  ];

  const handleFilterClick = (filter) => setActiveFilter(filter);

  return (
    <div className="image-slider__container">
      <div className="image-slider__filter-container">
        {filters.map((filter) => (
          <span
            key={filter}
            className={`image-slider__filter-item ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </span>
        ))}
      </div>
      <div className="image-slider__gallery">
        {images
          .filter(
            (image) => activeFilter === "all" || image.category === activeFilter
          )
          .map((image, index) => (
            <div key={index} className="image-slider__item show">
              <div className="image-slider__item-inner">
                <img src={image.src} alt={image.alt} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
