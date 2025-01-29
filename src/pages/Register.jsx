import React, { useState } from "react";
import img from "../assets/images/img.jpg";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    enrollmentNumber: "",
    email: "",
    collegeName: "",
    city: "",
  });
  const [popup, setPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="enrollmentNumber"
            placeholder="Enrollment Number"
            value={formData.enrollmentNumber}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="collegeName"
            placeholder="College Name"
            value={formData.collegeName}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {popup && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <p>Your resignation details have been submitted successfully!</p>
            <button onClick={closePopup} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    backgroundImage: `url(${img})`,

    backgroundSize: "cover", // Ensures the image covers the whole container
    backgroundPosition: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #000428, #004e92)",
    color: "#fff",
  },
  formBox: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "30px",
    borderRadius: "10px",
    width: "400px",
    border: "2px solid rgba(255,255,255,0.2)", // Corrected this line
    backdropFilter: "blur(50px)", // Apply blur to the background
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "24px",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    background: "#004e92",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  popup: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 20px",
    background: "#004e92",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Register;
