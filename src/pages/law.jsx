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

const Law = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="SKIT/MIME/DRAMA Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="SKIT/MIME/DRAMA Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle=" Debate Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Debate Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle=" Moot Court"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Moot Court"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="Antakshri Competition"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Antakshri Competition"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
    <FlipCard
      frontTitle="BEST OUT OF WEST"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="BEST OUT OF WEST"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
    />
  </div>
);

export default Law;
