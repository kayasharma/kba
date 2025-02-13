import React from "react";
import "./AboutUs.css";
import "font-awesome/css/font-awesome.min.css";
const AboutUs = () => {
  return (
    <div className="lion-container">
      <div className="elephant-content">
        <h2 className="zebra-title">ABOUT CITRONICS</h2>
        <p className="tiger-text">
          CITRONICS, the Annual Techno-Management Fest hosted by Chameli Devi
          Group of Institutions, Indore commenced in 2009 to showcase the
          prowess of Engineering and Management students across India. With
          diverse events spanning Technology and Management, Citronics aims to
          foster a scientific mindset.
        </p>
        <p className="tiger-text">
          The 16ᵀᴴ Edition, Citronics 2K25 is all set to take place on 27ᵗʰ
          March, 28th and 29th March 2025 offering participants a chance to
          compete for a substantial prize money of total INR 7 Lakhs accompanied
          by an appealing Citronics Rolling Trophy.
        </p>
        <button className="panda-button">Read More</button>
      </div>
      <div className="giraffe-image">
        <img
          src="/images/WhatsAppImage.jpg"
          alt="About Us"
          className="koala-photo"
        />
      </div>
    </div>
  );
};

export default AboutUs;
