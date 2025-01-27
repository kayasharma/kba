import React from "react";
import EventCard from "./EventCard";
import "./Pricing.css";

function Robote() {
  const events = [
    {
      title: "JS Galaxy",
      subtitle: "Exploring the Universe of JavaScript",
      price: "$299",
      category: "Development",
      author: "Faizan | JS Mastery",
      date: "Wed, Dec 20, 2023 | 2:30 PM - 1:00 PM",
      location: "Houston Space Center, TX",
      description:
        "Embark on a cosmic journey through the galaxy of JavaScript at JS Galaxy! This event brings together JavaScript developers and enthusiasts for an out-of-this-world experience.",
      link: "http://jsgalaxyuniverse.com/",
      logoText: "JS",
    },
    {
      title: "Python Summit",
      subtitle: "Diving into Python's Potential",
      price: "$199",
      category: "Programming",
      author: "Sarah | Code Studio",
      date: "Thu, Jan 15, 2024 | 10:00 AM - 4:00 PM",
      location: "Seattle Tech Hub, WA",
      description:
        "Explore the power of Python with top experts. From data science to machine learning, this event is perfect for Python enthusiasts!",
      link: "http://pythonsummit.com/",
      logoText: "PY",
    },
    {
      title: "React Conference",
      subtitle: "Building Interactive UIs",
      price: "$399",
      category: "Web Development",
      author: "John | React Hub",
      date: "Mon, Feb 5, 2024 | 9:00 AM - 5:00 PM",
      location: "San Francisco, CA",
      description:
        "Join the React Conference to learn the latest trends and best practices in building interactive user interfaces.",
      link: "http://reactconference.com/",
      logoText: "R",
    },
  ];

  return (
    <div className="event-row">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}

export default Robote;
