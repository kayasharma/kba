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

const Cs = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Defeat the Defect"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Defeat the Defect"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/when-coding-is-criminal.webp"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" HackTrail"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="HackTrail"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/download.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Blind Coding"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Blind Coding"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/images1.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Code Algo"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Code Algo"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/algorithm-formulation.jpg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Cs;
