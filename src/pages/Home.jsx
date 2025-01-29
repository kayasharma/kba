import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./Home.css";
import Homepageevents from "./Homepageevents";
import Footer from "./Footer";
import About from "./About";

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle button click and redirect
  const handleDiscoverEventsClick = () => {
    navigate("/Timeline"); // Redirect to "/timeline" (make sure this matches your route path for Timeline.jsx)
  };

  return (
    <div>
      <main className="main-content">
        <section className="intro">
          <h1>WELCOME TO CITRONICS 2K25</h1>
          <p>
            Join us for an exciting celebration of innovation and technology at
            our annual event. Participate in thrilling competitions, hands-on
            workshops, and inspiring tech talks, and enjoy vibrant
            entertainment. There's something for everyone at Citronics!
          </p>
          <button className="explore-btn" onClick={handleDiscoverEventsClick}>
            Discover Events
          </button>
        </section>

        <section className="image-container">
          <div className="circle">
            <img src="/images/guma-removebg-preview.png" alt="" />
          </div>
        </section>
      </main>
      <Homepageevents />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
