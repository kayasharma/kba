import React from "react";
import "./Pricing.css";

const FlipCard = ({ frontTitle, frontText, backTitle, backText }) => (
  <div className="flip-card">
    <div className="flip-card-front">
      <div className="inner">
        <h3>{frontTitle}</h3>
        <p>{frontText}</p>
      </div>
    </div>
    <div className="flip-card-back">
      <div className="inner">
        <h3>{backTitle}</h3>
        <p>{backText}</p>
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
    />
    <FlipCard
      frontTitle="Sketch your imagination"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Sketch your imagination"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="CAD Camp"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="CAD Camp"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
  </div>
);

export default Mech;
