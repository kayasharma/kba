import React, { useState } from "react";
import "./Homepageevents.css";

// Event Card Component
const EventCard = ({ image, price, category, date, title, author }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <p className="date">{date}</p>
      <p className="price">{price}</p>
      <div className="card-details">
        <p className="category">{category}</p>

        <h3>{title}</h3>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

// Main App Component
const Homepageevents = () => {
  const [search, setSearch] = useState("");

  const events = [
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Fri, Dec 15, 7:00 AM",
      title: "React Day Berlin",
      author: "lead name",
    },
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Tue, Jan 2, 4:30 AM",
      title: "GitHub Universe 2023",
      author: "lead name",
    },
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Fri, Dec 15, 8:30 AM",
      title: "JSM Nexus: Journey into the Future of Web category",
      author: "lead name",
    },
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Fri, Dec 15, 8:30 AM",
      title: "JSM Nexus: Journey into the Future of Web category",
      author: "lead name",
    },
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Fri, Dec 15, 8:30 AM",
      title: "JSM Nexus: Journey into the Future of Web category",
      author: "lead name",
    },
    {
      image: "/images/back.jpg",
      price: "₹",
      category: "category",
      date: "Fri, Dec 15, 8:30 AM",
      title: "JSM Nexus: Journey into the Future of Web category",
      author: "lead name",
    },
  ];

  // Filter events based on the search input
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
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
            author={event.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepageevents;
