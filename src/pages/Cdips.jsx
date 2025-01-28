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

const Cdips = () => (
  <div className="card-container">
    <FlipCard
      frontTitle="Bollywood Bonanza"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Bollywood Bonanza"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/iim.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Dance (solo) (dou) (group)"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Dance (solo) (dou) (group)"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/young-female-ballet-dancer-performing-water-drops-spray-caucasian-model-dancing-neon-lights-attractive-woman-ballet-contemporary-choreography-concept.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Beat the Streat (Rock Band)"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Beat the Streat (Rock Band)"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Open Mic"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Open Mic"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/openmic.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Ramp Walk (solo) (dou)"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Ramp Walk (solo) (dou)"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/specialevent.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle="Master chef "
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle="Master chef"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/man-cooking-food.webp"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" Scavenger Hunt"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle=" Scavenger Hunt"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/istockphoto-1226468802-612x612.jpg"
      backImage="images/flip.jpg"
    />
    <FlipCard
      frontTitle=" Snake & Ladder"
      frontText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis corrupti itaque dolore!"
      backTitle=" Snake & Ladder"
      backText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptatum eius quam debitis, sit amet sunt neque ipsum?"
      frontImage="images/63433c0468fb4d5c9e7274c32e689174.jpeg"
      backImage="images/flip.jpg"
    />
  </div>
);

export default Cdips;
