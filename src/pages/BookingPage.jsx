// BookingPage.jsx
import React from "react";
import { useLocation } from "react-router-dom"; // To access location state
import "./BookingPage.css";
const BookingPage = () => {
  const location = useLocation();
  const { fee, title, description } = location.state || {
    fee: "",
    title: "",
    description: "",
  };

  if (!location.state || !fee || !title || !description) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="booking-page">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>
        <strong>Registration Fee:</strong> ${fee}
      </p>
      <button className="complete-booking">Complete Registration</button>
    </div>
  );
};

export default BookingPage;
