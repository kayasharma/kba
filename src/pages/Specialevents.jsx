import React from "react";
import "./Specialevents.css";

const FlipCard = ({ frontTitle, frontText, backTitle, backText }) => (
  <div className="flip-card">
    <div className="flip-card-frontt">
      <div className="inner">
        <h3>{frontTitle}</h3>
        <p>{frontText}</p>
      </div>
    </div>
    <div className="flip-card-backk">
      <div className="inner">
        <div className="button-container">
          <button className="flip-card-button">Get Passes!</button>
        </div>
      </div>
    </div>
  </div>
);

const Specialevents = () => (
  <div className="card-container">
    <FlipCard frontTitle="" frontText="" backTitle="" backText="" />
  </div>
);

export default Specialevents;
