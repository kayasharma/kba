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

const Gdg = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Codeology"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Codeology"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="Tech Escape Room"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Tech Escape Room"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="10 hours Hackathon"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="10 hours Hackathon"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
  </div>
);

export default Gdg;
