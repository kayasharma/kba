import React from "react";
import "./About.css";
const PlanSection = () => {
  return (
    <section className="section__container plan__container">
      <p className="subheader">ABOUT CITRONICS</p>
      <h2 className="section__header">Plan your travel with confidence</h2>

      <div className="plan__grid">
        <div className="plan__content">
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
        </div>

        <div className="plan__image">
          <img src="images/aabout.jpg" alt="plan" />
          <img src="images/aabout.jpg" alt="plan" />
          <img src="images/about.jpg" alt="plan" />
        </div>
      </div>
    </section>
  );
};

const MemoriesSection = () => {
  return (
    <section className="memories">
      <div className="section__container memories__container">
        <div className="memories__header">
          <h2 className="section__header">
            Travel to make memories all around the world
          </h2>
          <button className="view__all">View All</button>
        </div>
        <div className="memories__grid">
          <div className="memories__card">
            <span>
              <i className="ri-calendar-2-line"></i>
            </span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div className="memories__card">
            <span>
              <i className="ri-shield-check-line"></i>
            </span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div className="memories__card">
            <span>
              <i className="ri-bookmark-2-line"></i>
            </span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div>
      <PlanSection />
      <MemoriesSection />
    </div>
  );
};

export default About;
