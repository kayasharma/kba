import React, { useEffect } from "react";
import "./Home.css";

import Swiper from "swiper";

const Home = () => {
  useEffect(() => {
    const countDownDate = new Date("March 27, 2025 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.querySelector(".days h1").innerText = days;
      document.querySelector(".hours h1").innerText = hours;
      document.querySelector(".minutes h1").innerText = minutes;
      document.querySelector(".seconds h1").innerText = seconds;

      if (seconds % 2 === 0) {
        document.querySelector(".seconds").style.backgroundColor = "#0F9D58";
      } else {
        document.querySelector(".seconds").style.backgroundColor = "#c2c2c2";
      }

      if (distance < 0) {
        clearInterval(interval);
        document.querySelector(".days h1").innerText = "00";
        document.querySelector(".hours h1").innerText = "00";
        document.querySelector(".minutes h1").innerText = "00";
        document.querySelector(".seconds h1").innerText = "00";
      }
    }, 1000);

    new Swiper(".mentorsSwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 30,
      breakpoints: {
        100: {
          slidesPerView: 1.4,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 0,
          enabled: true,
        },
        340: {
          slidesPerView: 1.6,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 0,
          enabled: true,
        },
        480: {
          slidesPerView: 1.7,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 0,
          enabled: true,
        },
        640: {
          slidesPerView: 2.2,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 0,
          enabled: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 0,
          enabled: false,
        },
      },
    });

    new Swiper(".sponsorsSwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 30,
      breakpoints: {
        100: {
          slidesPerView: 1.4,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 10,
          enabled: true,
        },
        340: {
          slidesPerView: 1.7,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 10,
          enabled: true,
        },
        480: {
          slidesPerView: 1.9,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 10,
          enabled: true,
        },
        640: {
          slidesPerView: 2.2,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 10,
          enabled: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: true,
          initialSlide: 1,
          spaceBetween: 10,
          enabled: false,
        },
      },
    });
  }, []);

  return (
    <div>
      <section className="hero">
        <img className="shape circle" src="assets/circle.svg" alt="" />
        <img className="shape square" src="assets/square.svg" alt="" />
        <h1 data-aos="fade-up" className="section-title">
          <span className="blue">CITRONICS</span> 2K25 IS HERE!
        </h1>
        <p data-aos="fade-up" className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <p data-aos="fade-up" className="starts-in">
          The event starts in
        </p>
        <div data-aos="flip-up" className="counter-wrapper">
          <div className="counter">
            <div className="days">
              <h1>00</h1>
              <p>days</p>
            </div>
            <div className="hours">
              <h1>00</h1>
              <p>hours</p>
            </div>
            <div className="minutes">
              <h1>00</h1>
              <p>minutes</p>
            </div>
            <div className="seconds">
              <h1>00</h1>
              <p>seconds</p>
            </div>
          </div>
        </div>
        <p className="location">CDGI,INDORE</p>
        <div className="register-button">
          <div className="button">DISCOVER EVENTS</div>
        </div>
      </section>
      <div id="about"></div>
      <section className="about">
        <h1 data-aos="zoom-in" className="section-title">
          <span className="green">#About</span> The Event
        </h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>
      <div id="timeline"></div>
      <section className="timeline">
        <h1 data-aos="zoom-in" className="section-title">
          <span className="yellow">#Event</span> Timeline
        </h1>
        <div className="event-wrapper">
          <div class="event">
            <div class="title">Workshops and Talks</div>
            <div class="description">
              <p>
                <span class="date">Jan 05th:</span> Solveit anounce.
              </p>
              <p>
                <span class="date">Feb 02nd:</span> Solveit day D.
              </p>
            </div>
          </div>
          <div class="event">
            <div class="title">Learn and Build</div>
            <div class="description">
              <p class="empty"></p>
              <p class="secondary">
                <span class="date">Mar 17th:</span> Submission Open.
              </p>
              <p class="empty"></p>
            </div>
          </div>
          <div class="event">
            <div class="title">Solution Evaluations 1</div>
            <div class="description">
              <p>
                <span class="date">Mar 31th:</span> Submissions Close.
              </p>
              <p class="empty"></p>
            </div>
          </div>
          <div class="event">
            <div class="title">Mentorship Phase</div>
            <div class="description">
              <p>
                <span class="date">May 03rd:</span> Top 100 announced.
              </p>
              <p class="empty"></p>
            </div>
          </div>
          <div class="event last">
            <div class="title">Demo Day Preparation</div>
            <div class="description">
              <p>
                <span class="date">Jun 02nd:</span> Final Solution Submission.
              </p>
              <p class="secondary">
                <span class="date">Jul 02nd:</span> Global team winners
                announced.
              </p>
              <p class="last-p">
                <span class="date">Aug 03:</span> Top 3 Winners Announced.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sponsors">
        <h1 data-aos="zoom-in" className="section-title">
          <span className="yellow">#Event</span> Sponsors
        </h1>
        <div className="swiper sponsorsSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="sponsor">
                <img src="assets/sponsor-ifr.png" alt="Sponsor" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor">
                <img src="assets/sponsor-ifr.png" alt="Sponsor" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="sponsor">
                <img src="assets/sponsor-ifr.png" alt="Sponsor" />
              </div>
            </div>
            {/* Add more sponsors */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
