import React, { useState, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
const Sports = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the products list inside the component
  const products = useMemo(
    () => [
      {
        id: 21,
        name: "CRICKET",
        image: "/images/3991.jpg",
        price: "₹1100/-",
        date: "27-28 Mar",
        time: "Full Day",
        prize: "₹32000/-",
        "1st prize": "₹21,000/-",
        "2nd prize": "₹11,000/-",
        venue: "cricket ground",
        button: "See Details",
      },
      {
        id: 22,
        name: "KABADDI",
        image: "/images/dmpd1ewgm6m41k7svypc.avif",
        price: "₹1100/-",
        date: "27-28 Mar",
        time: "Full Day",
        prize: "₹22500/-",
        "1st prize": "₹15,000/-",
        "2nd prize": "₹7,500/-",
        venue: "ground",
        button: "See Details",
      },
      {
        id: 23,
        name: "VOLLEYBALL",
        image: "/images/7152018.jpg",
        price: "₹700/-",
        date: "27-28 Mar",
        time: "Full Day",
        prize: "₹16500/-",
        "1st prize": "₹10,000/-",
        "2nd prize": "₹6,500/-",
        venue: "ground",
        button: "See Details",
      },
      {
        id: 24,
        name: "CHESS",
        image: "/images/OMJWZZ0.jpg",
        price: "₹700/-",
        date: "28 Mar",
        time: "10:00 AM to 1:00 PM",
        prize: "₹7500/-",
        "1st prize": "₹5,000/-",
        "2nd prize": "₹2,500/-",
        venue: "class room",
        button: "See Details",
      },
      {
        id: 25,
        name: "GULLY CRICKET",
        image: "/images/6375791.jpg",
        price: "₹250/-",
        date: "28-29 Mar",
        time: "Full Day",
        prize: "₹2500/-",
        "1st prize": "₹1,500/-",
        "2nd prize": "₹1,000/-",
        venue: " Space b/w Executive & ME Block",
        button: "See Details",
      },
      {
        id: 26,
        name: "FOOTBALL 7 A SIDE",
        image: "/images/615.jpg",
        price: "₹500/-",
        date: "27-28 Mar",
        time: "Full Day",
        prize: "₹5000/-",
        "1st prize": "₹3,000/-",
        "2nd prize": "₹2,000/-",
        venue: "-",
        button: "See Details",
      },
      {
        id: 51,
        name: "Arm Wrestling",
        image: "/images/arm.jpg",
        price: "₹500/-",
        date: "27-28 Mar",
        time: "Full Day",
        prize: "₹52,000/-",
        "1st prize": "₹2,500/-",
        "2nd prize": "₹1,500/-",
        venue: "-",
        button: "See Details",
      },
    ],
    []
  ); // The dependency array is empty to ensure it only computes once

  const openPreview = (productId) => {
    setActivePreview(productId);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">SPORTS</h3>
      <div className="products-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => openPreview(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              decoding="async"
              width="300"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <div className="card-details">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span className="pricee">{product.price}</span>
              </div>
              <p className="date">{product.date}</p>
              <h3>{product.name}</h3>
              <div className="prizes">
                <p>Prize: {product["prize"]}</p>
              </div>
              <Link to="" className="button">
                {product.button}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {activePreview && (
        <div className="products-preview active">
          {products
            .filter((product) => product.id === activePreview)
            .map((product) => (
              <div className="preview" key={product.id}>
                <i className="fas fa-times" onClick={closePreview}></i>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <i key={index}></i>
                  ))}
                </div>
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Time:</strong> {products.time}
                  </div>
                  <div className="detail-item">
                    <strong>Venue:</strong> {products.venue}
                  </div>
                  <div className="detail-item">
                    <strong>1st Prize:</strong> {products["1st prize"]}
                    <strong>2nd Prize:</strong> {products["2nd prize"]}
                  </div>
                </div>
                <div className="price">{product.price}</div>
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
};

export default Sports;
