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

const Cs = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Defeat the Defect"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Defeat the Defect"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle=" HackTrail"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="HackTrail"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="Blind Coding"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Blind Coding"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="Code Algo"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Code Algo"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
  </div>
);

export default Cs;
