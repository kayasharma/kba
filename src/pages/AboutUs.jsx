import React from "react";
import "./AboutUs.css";
import { FaTwitter, FaFacebook, FaGithub, FaPinterest } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="image">{/* Add image here */}</div>
      <div className="content">
        <h2>About Us</h2>
        <span>{/* Line here */}</span>
        <p>
          CITRONICS, the Annual Techno-Management Fest hosted by Chameli Devi
          Group of Institutions, Indore commenced in 2009 to showcase the
          prowess of Engineering and Management students across India. With
          diverse events spanning Technology and Management, Citronics aims to
          foster a scientific mindset. The 16ᵀᴴ Edition, Citronics 2K25 is all
          set to take place on 27ᵗʰ March, 28th and 29th March 2025 offering
          participants a chance to compete for a substantial prize money of
          total INR 7 Lakhs accompanied by an appealing Citronics Rolling
          Trophy.
        </p>
        <ul className="links">
          <li>
            <a href="/Timeline">EVENT CATEGORY</a>
          </li>
          <div className="vertical-line"></div>
          <li>
            <a href="/Homepageevents">POPULAR EVENTS</a>
          </li>
          <div className="vertical-line"></div>
          <li>
            <a href="/Footer">CONTACT US</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaPinterest />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;
