import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for routing
import { FaArrowLeft } from "react-icons/fa"; // Importing the back arrow icon from react-icons
import "./Header.css"; // Import the CSS file

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Function to go back to the previous page
  const goBack = (e) => {
    e.preventDefault(); // Prevents any default browser behavior
    navigate(-1); // Goes to the previous page in the history
  };

  return (
    <header className="header">
      <a href="#link" className="logo">
        <span>Citro</span>2K25
      </a>

      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="/">HOME</a>
        <a href="/Timeline">EVENTS</a>
        <a href="#work">WORKSHOPS</a>
        <a href="/AboutUs">ABOUT US</a>
        <a href="#contact">CONTACT US</a>
      </nav>

      {/* Back button */}
      <div className="back-button" onClick={goBack}>
        <FaArrowLeft /> {/* Back arrow icon */}
      </div>

      <div
        id="menu-bars"
        className="fas fa-bars"
        onClick={toggleMenu} // Toggle the menu on click
      ></div>
    </header>
  );
};

export default Header;
