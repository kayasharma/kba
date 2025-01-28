import React from "react";
import "./Robote.css";

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

const Robote = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="ROBO SOCCOR"
      frontText="Lorem ipsum dolor sit  amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="ROBO SOCCOR"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/robosoccor.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="ROBO-RACE"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle=""
      backText=""
      frontImage="images/robosoccor.jpg"
      backImage="images/ROBOWAR.png"
    />
    <FlipCard
      frontTitle="LINE FOLLOWER"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="ROBO-RACE"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/robosoccor.jpg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Robote;
