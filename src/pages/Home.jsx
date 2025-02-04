import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Homepageevents from "./Homepageevents";
import Logos from "./Logos";

const Home = () => {
  const navigate = useNavigate();

  // Set target time for the countdown to March 27, 2025, at 14:30:00
  const targetDate = new Date("Mar 27, 2025 14:30:00").getTime();

  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = targetDate - now;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timerInterval); // Cleanup interval on unmount
  }, []);

  const handleDiscoverEventsClick = () => {
    navigate("/Timeline");
  };

  return (
    <div>
      <main className="main-content">
        <section className="intro">
          <img
            src="/images/Logo-removebg.png" // Replace with your actual logo path
            alt="Citronics 2k25 Logo"
            className="logo"
          />
          <p>
            Join us for an exciting celebration of innovation and technology at
            our annual event, happening from March 27th to March 29th.
            Participate in thrilling competitions, hands-on workshops, and
            inspiring tech talks, and enjoy vibrant entertainment. There's
            something for everyone at Citronics!
          </p>

          {/* Timer Section */}
          <div className="timer">
            <div className="sub_timer">
              <h1 id="day" className="digit">
                {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
              </h1>
              <p className="digit_name">Days</p>
            </div>
            <div className="sub_timer">
              <h1 id="hour" className="digit">
                {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
              </h1>
              <p className="digit_name">Hours</p>
            </div>
            <div className="sub_timer">
              <h1 id="min" className="digit">
                {timeLeft.minutes < 10
                  ? `0${timeLeft.minutes}`
                  : timeLeft.minutes}
              </h1>
              <p className="digit_name">Minutes</p>
            </div>
            <div className="sub_timer">
              <h1 id="sec" className="digit">
                {timeLeft.seconds < 10
                  ? `0${timeLeft.seconds}`
                  : timeLeft.seconds}
              </h1>
              <p className="digit_name">Seconds</p>
            </div>
          </div>

          <button className="explore-btn" onClick={handleDiscoverEventsClick}>
            Discover Events
          </button>
        </section>
      </main>
      <Homepageevents />
      <Logos />
    </div>
  );
};

export default Home;
