import React from "react";
import "./Home.css"; // Importing the CSS file
import Homepageevents from "./Homepageevents";
import Footer from "./Footer";
import About from "./About";
const Home = () => {
  return (
    <div>
      <main className="main-content">
        <section className="intro">
          <h1>WELCOME TO CITRONICS 2K25</h1>
          <p>add paragraph here!</p>
          <button className="explore-btn">Discover Events</button>
        </section>

        <section className="image-container">
          <div className="circle">
            <img src="/images/homepage.png" alt="" />
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
