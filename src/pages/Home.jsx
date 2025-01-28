import React, { useRef } from "react";
import "./Home.css";
import Homepageevents from "./Homepageevents";
import Footer from "./Footer";
import About from "./About";

const Home = () => {
  const eventsRef = useRef(null);

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({ behavior: "smooth" });
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
            entertainment. There's something for everyone at Citronics!
          </p>
          <button className="explore-btn" onClick={scrollToEvents}>
            Discover Events
          </button>
        </section>

        <section className="image-container">
          <div className="circle">
            <img src="/images/fut-removebg-preview.png" alt="" />
          </div>
        </section>
      </main>
      <Homepageevents ref={eventsRef} />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
