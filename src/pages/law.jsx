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

const Law = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="SKIT/MIME/DRAMA Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="SKIT/MIME/DRAMA Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/ab67616d00001e02e813ba49293dbe4c909b7222.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" Debate Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Debate Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/debate.png"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" Moot Court"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Moot Court"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/Moot-Court-Small-Feature-Image.png"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Antakshri Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Antakshri Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/Slide1-1024x576-1.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="BEST OUT OF WEST"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="BEST OUT OF WEST"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/sngine_66a67eae240c273c03aede3ba816dd4a.jpg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Law;
