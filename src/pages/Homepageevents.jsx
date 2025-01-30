import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import "./Homepageevents.css";

// Event Card Component
const EventCard = ({ event, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(event.id)}>
      <img src={event.image} alt={event.name} />
      <div className="card-details">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="price">{event.price}</span>
          <span className="category">{event.category}</span>
        </div>
        <p className="date">{event.date}</p>
        <h3>{event.name}</h3>
        <Link to="/" className="button">
          {event.button}
        </Link>
      </div>
    </div>
  );
};

// Forward ref to the root div of Homepageevents
const Homepageevents = forwardRef((props, ref) => {
  const [search, setSearch] = useState("");
  const [activePreview, setActivePreview] = useState(null);

  const events = [
    {
      id: 1,
      image: "/images/hackers-collaborating-coding-virus.jpg",
      price: "₹500/-",
      category: "Echelon",
      date: "date",
      time: "time",
      prize: "₹30,000/-",
      name: "10 HOURS HACKATHON",
      button: "See Details",
    },
    {
      id: 2,
      image:
        "/images/project-plan-program-activity-solution-strategy-concept.jpg",
      price: "₹200/-",
      time: "time",
      prize: "₹11,000/-",
      category: "Special Events",
      date: "date",
      name: "SCIENCE PROJECT COMPETITION",
      button: "See Details",
    },
    {
      id: 3,
      image: "/images/ROBO-SOC.jpg",
      price: "₹500/-",
      category: "ROBOTICS",
      date: "date",
      time: "time",
      prize: "₹12,000/-",
      name: "ROBO SOCCER",
      button: "See Details",
    },
    {
      id: 4,
      image: "/images/dance.jpg",
      price: "₹100/-",
      category: "institute",
      date: "date",
      time: "time",

      name: "DJ EVENING",
      button: "See Details",
    },
    {
      id: 5,
      image: "/images/6193472.jpg",
      price: "₹150/-",
      category: "MBA",
      date: "date",
      time: "time",
      prize: "₹5,000/-",
      name: "CITRONICS PHOTOGRAPHY",
      button: "See Details",
    },
    {
      id: 6,
      image:
        "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
      price: "₹300/-",
      time: "time",
      prize: "₹7,500/-",
      category: "cdips",
      date: "date",
      name: "BEAT THE STREAT(Rock Band)",
      button: "See Details",
    },

    // Add other events here...
  ];

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const openPreview = (eventId) => {
    setActivePreview(eventId);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  return (
    <div ref={ref} className="container">
      <h1>POPULAR EVENTS</h1>
      <div className="search-bar">
        <span className="search-icon">
          <span className="material-symbols-outlined">search</span>
        </span>
        <input
          type="text"
          placeholder="Search name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="category-section">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={openPreview} />
        ))}
      </div>

      {/* Popup preview for active event */}
      {activePreview && (
        <div className="products-preview active">
          {events
            .filter((event) => event.id === activePreview)
            .map((event) => (
              <div className="preview" key={event.id}>
                <i className="fas fa-times" onClick={closePreview}></i>
                <img src={event.image} alt={event.name} />
                <h3>{event.name}</h3>
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Date:</strong> {event.date}
                  </div>
                  <div className="detail-item">
                    <strong>Time:</strong> {event.time}
                  </div>
                  <div className="detail-item">
                    <strong>Prize:</strong> {event.prize}
                  </div>
                </div>
                <div className="price">{event.price}</div>
                <div className="buttons">
                  <a href="/" className="buy">
                    About!
                  </a>
                  <a href="/Register" className="cart">
                    Participate now!
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
});

export default Homepageevents;
