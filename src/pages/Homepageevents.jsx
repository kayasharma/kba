import React, { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import "./Homepageevents.css";

// Event Card Component
const EventCard = ({ event, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(event.id)}>
      <img
        src={event.image}
        alt={event.name}
        loading="lazy"
        decoding="async"
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
      />
      <div className="card-details">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="price">{event.price}</span>
          <span className="category">{event.category}</span>
          <p className="date">{event.date}</p>
        </div>

        <h3>{event.name}</h3>
        <p className="author1">{event.author1}</p>
        <p className="author1"> Number: {event["phone no"]}</p>
        <div className="prizes">
          <p>Prizes: {event["prize"]}</p>
        </div>
        <Link to="/" className="button">
          {event.button}
        </Link>
      </div>
    </div>
  );
};

const Homepageevents = () => {
  const [search, setSearch] = useState("");
  const [activePreview, setActivePreview] = useState(null);
  const ref = useRef(null); // Define ref

  // Memoize the events array
  const events = useMemo(
    () => [
      {
        id: 25,
        image: "/images/banner.png",
        price: "₹500/-",
        category: "Software",
        date: "28-Mar",
        time: "9 to 4 PM",
        prize: "₹30,000/-",
        "1st prize": "₹15,000/-",
        "2nd prize": "₹10,000/-",
        "3rd prize": "₹5,000/-",
        venue: "main hall",
        name: "DEVHACKSPRINT",
        button: "See Details",

        author: " Devansh Jagtap",
        author1: "HEAD(FACULTY):Prof. Paras Bhanopiya",
        "phone no": "9131724292",
        facultyno: "9755952227",
        aboutFile: "/pdf/DevHackSprint.pdf",
      },
      {
        id: 7,
        image:
          "/images/project-plan-program-activity-solution-strategy-concept.jpg",
        price: "₹200/-",
        category: "1st YEAR",
        date: "28 Mar",
        time: "1-3:00 PM",
        prize: "₹11,000/-",
        "1st prize": "₹6,000/-",
        "2nd prize": "₹3,500/-",
        "3rd prize": "₹1,500/-",
        venue: "Science Block",
        name: "SCIENCE PROJECT COMPETITION",
        button: "See Details",
        author: "Sachin Tiwari& Daksh Hardiya",
        author1: "HEAD(FACULTY): Dr. Abhay Tambe,Prof. Chanchal Chandora",
        "phone no": "9826602735,9826602735",
        facultyno: "7089754199",
        aboutFile: "/pdf/ScienceModelCompetitionforCollegeStudents.pdf",
      },
      {
        id: 39,
        image: "/images/ROBO-SOC.jpg",
        price: "₹500/-",
        category: "ROBOTICS",
        date: "28-29 Mar",
        time: "10:00 AM to 3:00 PM",
        prize: "₹30,000/-",
        "1st prize": "₹15,000/-",
        "2nd prize": "₹10,000/-",
        "3rd prize": "₹5,000/-",
        venue: "main hall",
        name: "ROBO SOCCER",
        button: "See Details",
        author: "lead",
        author1: "HEAD(FACULTY):Ms. Mitali Sisodiya ",
        "phone no": "8770997394",
        facultyno: "number",

        aboutFile: "/pdf/ECEventDetails.pdf",
      },
      {
        id: 56,
        image: "/images/dance.jpg",
        price: "₹100/-",
        category: "ENTERTAINMENT",
        date: "29 Mar",
        time: "5:30 PM to 7:30 PM",

        venue: "Main Auditorium",
        name: "DJ EVENING",
        button: "See Details",

        aboutFile: "/pdf/DanceEvent.pdf",
      },
      {
        id: 54,
        image: "/images/6193472.jpg",
        price: "₹150/-",
        category: "Management",
        date: "27-28-29 Mar",
        time: "Full Day",
        prize: "₹30,000/-",
        "1st prize": "₹15,000/-",
        "2nd prize": "₹10,000/-",
        "3rd prize": "₹5,000/-",
        venue: "Main Auditorium",
        name: "CITRONICS PHOTOGRAPHY",
        button: "See Details",
        author: "lead",
        author1: "HEAD(FACULTY):name",
        "phone no": "number",
        facultyno: "number",
      },
      {
        id: 27,
        image:
          "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
        price: "₹300/-",
        category: "Special Events",
        date: "28 Mar",
        time: "9:30 to 1 PM",
        prize: "₹30,000/-",
        "1st prize": "₹15,000/-",
        "2nd prize": "₹10,000/-",
        "3rd prize": "₹5,000/-",
        venue: "Main hall",
        name: "BEAT THE STREAT (Rock Band)",
        button: "See Details",
        author: " Divyanshu Solanki, Jigyasha Trivedi",
        author1: "HEAD(FACULTY):Dr. Dileep Rupale, Prof. Olinka Panhalkar",
        "phone no": " 8770884886, 8827060214",
        facultyno: " 9685300378, 9340057527",
        aboutFile: "/pdf/beatthestreat.pdf",
      },
      // Add other events with the new fields...
    ],
    []
  );

  // Memoize the filtered events
  const filteredEvents = useMemo(
    () =>
      events.filter((event) =>
        event.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, events]
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

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events"
        />
        <i className="fas fa-search search-icon"></i>
      </div>

      <div className="category-section">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} onClick={openPreview} />
        ))}
      </div>

      {/* Popup preview for active event */}
      {activePreview && (
        <div className="pproducts-preview active">
          {events
            .filter((event) => event.id === activePreview)
            .map((event) => (
              <div className="ppreview" key={event.id}>
                <i
                  className="fas fa-times"
                  onClick={closePreview}
                  aria-label="Close preview"
                ></i>
                <img src={event.image} alt={event.name} loading="lazy" />
                <h3>{event.name}</h3>
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Time:</strong> {event.time}
                    <strong> Head(student):</strong> {event.author}
                  </div>
                  <div className="detail-item">
                    <strong>Venue:</strong> {event.venue}
                    <strong>Number:</strong>
                    {event.facultyno}
                  </div>
                  <div className="detail-item">
                    <strong>1st Prize:</strong> {event["1st prize"]}
                    <strong>2nd Prize:</strong> {event["2nd prize"]}
                    <strong>3rd Prize:</strong> {event["3rd prize"]}
                  </div>
                </div>
                <div className="price">FEES:{event.price}</div>
                <div className="bbuttons">
                  <a
                    href={event.aboutFile}
                    className="buy"
                    target="_blank" // Open the .pdf file in a new tab
                    rel="noopener noreferrer"
                  >
                    About
                  </a>
                  <a href="/Register" className="ccart">
                    Participate now!
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Homepageevents;
