import React from "react";
import "./Pricing.css";

const FlipCard = ({
  frontTitle,
  frontText,
  backTitle,
  backText,
  frontImage,
  backImage,
}) => (
  <div className="flip-card">
    <div
      className="flip-card-front"
      style={{ backgroundImage: `url(${frontImage})` }}
    >
      <div className="inner">
        <h3>{frontTitle}</h3>
        <p>{frontText}</p>
      </div>
    </div>
    <div
      className="flip-card-back"
      style={{ backgroundImage: `url(${backImage})` }}
    >
      <div className="inner">
        <div className="button-container">
          <button className="flip-card-button">Register!</button>
          <button className="flip-card-button">See Details</button>
        </div>
      </div>
    </div>
  </div>
);

const Management = () => (
  <div className="card-container">
    <FlipCard
      frontTitle=" Poster Making Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Poster Making Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/poster.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Ad Mad Show"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Ad Mad Show"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/download.png"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="CITRONICS Reel Making"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="CITRONICS Reel Making"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/reel.webp"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" CITRONICS Photography"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="CITRONICS Photography"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/vertical-shot-silhouette-man-front-camera.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Brand Quiz"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Brand Quiz"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/unnamed.png"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" Case Writing Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Case Writing Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/case.jpg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Management;
