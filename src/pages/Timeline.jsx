import React, { useState } from "react";

import "./Timeline.css"; // Add custom styles here

const events = [
  {
    id: 1,
    title: "Robotics",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/finalimgone.jpg",
    link: "/Robote",
  },
  {
    id: 2,
    title: "GDG/Echelon",
    date: "Tue, Jan 2, 4:30 AM",
    category: "ai",
    price: "discover events",
    author: "lead",
    image: "/images/baner.jpg",
    link: "/Gdg",
  },
  {
    id: 3,
    title: "management",
    date: "Fri, Dec 15, 8:30 AM",
    category: "Development",
    price: "discover events",
    author: "lead",
    image: "/images/7054169.jpg", // Replace with the actual image URL
    link: "/Management",
  },
  {
    id: 4,
    title: "civil",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/background.jpg", // Replace with the actual image URL
    link: "/Civil",
  },
  {
    id: 5,
    title: "pahal",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/56514.jpg", // Replace with the actual image URL
    link: "/Pahal",
  },
  {
    id: 6,
    title: "sports",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/6qyc_ylv8_230329.jpg", // Replace with the actual image URL
    link: "/Sports",
  },

  {
    id: 7,
    title: "mechanical",
    date: "Tue, Jan 2, 4:30 AM",
    category: "AI",
    price: "discover events",
    author: "lead",
    image: "/images/mech.jpg", // Replace with the actual image URL
    link: "/Mech",
  },
  {
    id: 8,
    title: "pharmacy",
    date: "Fri, Dec 15, 8:30 AM",
    category: "Development",
    price: "discover events",
    author: "lead",
    image: "/images/20944962.jpg", // Replace with the actual image URL
    link: "/Cdip",
  },
  {
    id: 9,
    title: "CSE/CSIT/MCA",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/professional-programmer-working-late-dark-office.jpg", // Replace with the actual image URL
    link: "/Cs",
  },
  {
    id: 10,
    title: "on spot events",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/back.jpg", // Replace with the actual image URL
    link: "/Onspotevents",
  },
  {
    id: 11,
    title: "CDIPS",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image:
      "/images/3d-illustration-woman-singer-with-guitar-microphone-cartoon-3d-render-design.jpg", // Replace with the actual image URL
    link: "/Cdips",
  },
  {
    id: 12,
    title: "law",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/view-3d-justice-scales.jpg", // Replace with the actual image URL
    link: "/Law",
  },

  {
    id: 14,
    title: "special events",
    date: "Fri, Dec 15, 7:00 AM",
    category: "Tech",
    price: "discover events",
    author: "lead",
    image: "/images/party_audience_on_spotlight_background_2107.jpg", // Replace with the actual image URL
    link: "/Specialevents",
  },
  // ... (rest of your events array)

  // (Your events array
];

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-info">
        <p className="event-date">{event.date}</p>
        <h3 className="event-title">{event.title}</h3>
        <p className="event-author">{event.author}</p>
        <a href={event.link} className="event-price">
          {event.price}
        </a>
      </div>
    </div>
  );
};

const splitEventsIntoColumns = (events) => {
  const columnCount = 3;
  const columns = [[], [], []];

  events.forEach((event, index) => {
    const columnIndex = index % columnCount;
    columns[columnIndex].push(event);
  });

  return columns;
};

const Timeline = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const columns = splitEventsIntoColumns(filteredEvents);

  return (
    <div className="app-container">
      <div className="search-bar">
        <span className="search-icon">
          <span className="material-symbols-outlined"></span>
        </span>
        <input
          type="text"
          placeholder="Search title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="columns-container">
        {columns.map((column, index) => (
          <div key={index} className="events-column">
            {column.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
