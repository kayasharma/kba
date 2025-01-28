import React, { useState, forwardRef } from "react";
import "./Homepageevents.css";

// Event Card Component
const EventCard = ({ image, price, category, date, title, button }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p className="date">{date}</p>
      <p className="price">{price}</p>
      <div className="card-details">
        <h3>{title}</h3>
        <p className="category">{category}</p>
        <p className="button">{button}</p>
      </div>
    </div>
  );
};

// Forward ref to the root div of Homepageevents
const Homepageevents = forwardRef((props, ref) => {
  const [search, setSearch] = useState("");

  const events = [
    {
      image: "/images/hackers-collaborating-coding-virus.jpg",
      price: "₹500/-",
      category: "Echelon",
      date: "Fri, Dec 15, 7:00 AM",
      title: "10 HOURS HACKATHON",

      button: "Register Now",
    },
    {
      image:
        "/images/project-plan-program-activity-solution-strategy-concept.jpg",
      price: "₹200/-",
      category: "Special Events",
      date: "Tue, Jan 2, 4:30 AM",
      title: " SCIENCE PROJECT COMPITITION",

      button: "Register Now",
    },
    {
      image:
        "/images/futuristic-football-soccer-player-with-glowing-lights.jpg",
      price: "₹500/-",
      category: "ROBOTICS",
      date: "Fri, Dec 15, 8:30 AM",
      title: "ROBO SOCCER",

      button: "Register Now",
    },
    {
      image: "/images/dance.jpg",
      price: "₹100/-",
      category: "institute",
      date: "Fri, Dec 15, 8:30 AM",
      title: "DJ EVENING",

      button: "Register Now",
    },
    {
      image: "/images/6193472.jpg",
      price: "₹150/-",
      category: "MBA",
      date: "Fri, Dec 15, 8:30 AM",
      title: "PHOTOGRAPHY",

      button: "Register now",
    },
    {
      image:
        "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
      price: "₹300/-",
      category: "cdips",
      date: "Fri, Dec 15, 8:30 AM",
      title: "BEAT THE STREAT(Rock Band)",

      button: "Register Now",
    },
    // ... (other events)
  ];

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="container">
      <h1>POPULAR EVENTS</h1>
      <div className="search-bar">
        <span className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </span>
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="category-section">
        {filteredEvents.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            date={event.date}
            title={event.title}
            price={event.price}
            category={event.category}
            button={event.button}
          />
        ))}
      </div>
    </div>
  );
});

export default Homepageevents;
