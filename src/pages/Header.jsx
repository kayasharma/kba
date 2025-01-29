import React, { useState } from "react";
import "./Header.css"; // Import the CSS file

const Header = () => {
  // State to toggle the navbar visibility
  const [menuActive, setMenuActive] = useState(false);

  // Toggle the navbar active state
  const toggleMenu = () => {
    setMenuActive(!menuActive);
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

      <div
        id="menu-bars"
        className="fas fa-bars"
        onClick={toggleMenu} // Toggle the menu on click
      ></div>
    </header>
  );
};

export default Header;
