import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Pricing.css"; // Import the stylesheet

const Robote = () => {
  return (
    <div className="App full-height">
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <div className="icon">
              {/* Replace the icon with an image */}
              <img
                src="/images/robot.jpeg"
                alt="JS Galaxy Icon"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <h2>Robo War: "An open talent event for all."</h2>
          <div className="tags">
            <span className="price">200/-</span>
            {/* Link used for navigation */}
            <Link to="/rules" className="category">
              rules!
            </Link>
            <span className="author">GS: name</span>
          </div>
          {/* Link used for navigation */}
          <Link to="/get-ticket" className="ticket-btn">
            Get Ticket
          </Link>
          <div className="details">
            <p>
              <strong>Date & Time:</strong> mention here
            </p>
            <p>
              <strong>Location:</strong> mention here
            </p>
          </div>
          <div className="description">
            <h3>PRICES</h3>
            <p>
              <strong>1st: rupees</strong>
            </p>
            <p>
              <strong>2nd: rupees</strong>
            </p>
            <p>
              <strong>3rd: rupees</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <div className="icon">
              {/* Replace the icon with an image */}
              <img
                src="/images/robot.jpeg"
                alt="JS Galaxy Icon"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <h2>Robo War: "An open talent event for all."</h2>
          <div className="tags">
            <span className="price">200/-</span>
            {/* Link used for navigation */}
            <Link to="/rules" className="category">
              rules!
            </Link>
            <span className="author">GS: name</span>
          </div>
          {/* Link used for navigation */}
          <Link to="/get-ticket" className="ticket-btn">
            Get Ticket
          </Link>
          <div className="details">
            <p>
              <strong>Date & Time:</strong> mention here
            </p>
            <p>
              <strong>Location:</strong> mention here
            </p>
          </div>
          <div className="description">
            <h3>PRICES</h3>
            <p>
              <strong>1st: rupees</strong>
            </p>
            <p>
              <strong>2nd: rupees</strong>
            </p>
            <p>
              <strong>3rd: rupees</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <div className="icon">
              {/* Replace the icon with an image */}
              <img
                src="/images/robot.jpeg"
                alt="JS Galaxy Icon"
                className="icon-image"
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <h2>Robo War: "An open talent event for all."</h2>
          <div className="tags">
            <span className="price">200/-</span>
            {/* Link used for navigation */}
            <Link to="/rules" className="category">
              rules!
            </Link>
            <span className="author">GS: name</span>
          </div>
          {/* Link used for navigation */}
          <Link to="/get-ticket" className="ticket-btn">
            Get Ticket
          </Link>
          <div className="details">
            <p>
              <strong>Date & Time:</strong> mention here
            </p>
            <p>
              <strong>Location:</strong> mention here
            </p>
          </div>
          <div className="description">
            <h3>PRICES</h3>
            <p>
              <strong>1st: rupees</strong>
            </p>
            <p>
              <strong>2nd: rupees</strong>
            </p>
            <p>
              <strong>3rd: rupees</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Robote;
