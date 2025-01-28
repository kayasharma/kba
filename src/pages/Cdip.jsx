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

const Cdip = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Pharm - Model & Poster"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Pharm - Model & Poster"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="Nurtraceutical Food Exhibition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Nurtraceutical Food Exhibition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle=" Rifle Shooting"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle=" Rifle Shooting"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle=" Live Painting & Exhibition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Live Painting & Exhibition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
  </div>
);

export default Cdip;
