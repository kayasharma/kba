import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.brand}>CITRONICS</div>
      <nav style={styles.nav}>
        <a href="/" style={styles.navLink}>
          Register
        </a>
        <a href="/" style={styles.navLink}>
          FAQ
        </a>
      </nav>
      <div style={styles.social}>
        <a
          href="https://www.facebook.com/cdgiindore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook" style={styles.icon}></i>
        </a>
        <a
          href="https://www.youtube.com/cdgi_indore"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube" style={styles.icon}></i>
        </a>
        <a
          href="https://www.instagram.com/cdgi_citronics/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram" style={styles.icon}></i>
        </a>
      </div>
      <div style={styles.description}>
        <span>Contact us at: +91 </span>
        <br />
        <span>Reach us at: citronics@cdgi.edu.in</span>
      </div>
      <div style={styles.name}></div>
    </footer>
  );
};

const styles = {
  footer: {
    color: "white", // corrected text color
    textAlign: "center",
    padding: "50px",
    marginTop: "70px",
    fontFamily: "Arial, sans-serif",
    background:
      "linear-gradient(80deg, rgb(28, 165, 206) 38%, rgb(76, 190, 188) 56%)",

    borderRadius: "8px", // rounded corners for the whole footer
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.99)", // box shadow for the entire footer
  },
  brand: {
    fontSize: "44px",
    fontWeight: "bold",
    marginBottom: "40px",
  },
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    marginBottom: "50px",
  },
  navLink: {
    color: "white", // corrected text color
    textDecoration: "none",
    fontSize: "26px",
  },
  social: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    marginBottom: "35px",
  },
  icon: {
    fontSize: "30px",
    color: "white", // corrected text color
    cursor: "pointer",
  },
  description: {
    fontSize: "20px",
    lineHeight: "1.5",
    marginTop: "50px",
  },
  name: {
    fontSize: "15px",
    marginTop: "20px",
  },
};

export default Footer;
