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

const Mech = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Go-Cart"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Go-Cart"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/gocart.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Sketch your imagination"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Sketch your imagination"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/6470209.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="CAD Camp"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="CAD Camp"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/large.jpg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Mech;
