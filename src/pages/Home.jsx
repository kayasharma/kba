import React from "react";

import "./Home.css"; // Ensure this CSS file matches the exact styling you need
import Homepageevents from "./Homepageevents";
import Logos from "./Logos";
import Homepageimage from "./Homepageimage";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        {/* Top Section with Logos */}
        <div className="top-logos">
          <img src="/logos/logo2.png" alt="Logo 2" />
          <img src="/logos/logo1.png" alt="Logo 1" />

          <img src="/logos/logo3.png" alt="Logo 3" className="resize1" />
          <img src="/logos/law.png" alt="log 6" />

          <img src="/logos/logo4.png" alt="Logo 4" className="resize3" />
          <img src="/logos/logo5.png" alt="Logo 5" />

          <img src="/logos/nba.png" alt="Logo 7" className="resize2" />
        </div>

        {/* Center Section */}
        <div className="center-content">
          <h1>CHAMELI DEVI GROUP OF INSTITUTIONS, INDORE</h1>
          <h2>PRESENTS</h2>

          <div className="event-logo">
            <img src="/images/Logo-removebg.png" alt="Citronics 2K25" />
          </div>

          <h3>27th - 29th MARCH 2025</h3>

          <div className="collaboration-section">
            <h4>In Collaboration With Indore Police Cyber Branch</h4>
            <img src="/logos/logo8.png" alt="Collaboration 1" />
          </div>
        </div>

        {/* Bottom Section with Event Details */}
        <div className="event-details">
          <h3>Join us to be a part of an exciting event</h3>
          <div className="committee-members">
            <p>
              VICE PRESIDENT <br /> Mr. TUSHAR MUNDEL
            </p>
            <p>
              VICE PRESIDENT <br /> Mr. PRABHAT TIWARI
            </p>
            <p>
              PRESIDENT <br /> Mr. TUSHAR KALA
            </p>
            <p>
              VICE PRESIDENT <br /> Mr. ADITYA SINGH
            </p>
            <p>
              VICE PRESIDENT <br /> Mr. AKSHAY TRIPATHI
            </p>
          </div>
        </div>
      </div>

      <Homepageevents />
      <Homepageimage />
      <Logos />
    </div>
  );
};

export default Home;
