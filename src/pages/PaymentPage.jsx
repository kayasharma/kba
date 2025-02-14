import React from "react";
import "./PaymentPage.css"; // Import CSS for styling

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h2>Event Registration Payment</h2>
      <div className="payment-box">
        <div className="payment-info">
          <p>
            <strong>College Name:</strong> Chameli Devi Group of Institutions
          </p>
          <p>
            <strong>College ID:</strong>{" "}
          </p>
        </div>
        <div className="qr-code">
          <p>
            <strong>Scan to Pay:</strong>
          </p>
          <img src="/images/qrr.png" alt="College QR Code" />
        </div>
      </div>
      <p className="contact-info">
        For payment issues, contact: Event.Support@College.Edu
      </p>
    </div>
  );
};

export default PaymentPage;
