import React from "react";
import "./EventCard.css";

const EventCard = ({
  title,
  subtitle,
  price,
  category,
  author,
  date,
  location,
  description,
  link,
  logoText,
}) => {
  return (
    <div className="event-container">
      <div className="event-banner">
        <h1 className="event-title">{title}</h1>
        <p className="event-subtitle">{subtitle}</p>
        <div className="event-logo">
          <span>{logoText}</span>
        </div>
      </div>

      <div className="event-details">
        <p className="event-author">
          by <span className="author-name">{author}</span>
        </p>

        <button className="get-ticket-btn">Get Ticket</button>

        <div className="event-date-location">
          <p className="date"> {date}</p>
          <p className="location"> {location}</p>
        </div>
        <div className="event-price-category">
          <span className="price">{price}</span>
          <span className="category">{category}</span>
        </div>

        <div className="event-description">
          <h3>What You'll Learn:</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
