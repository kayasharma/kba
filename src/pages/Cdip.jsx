import React, { useState } from "react";
import "./Robote.css";

const products = [
  {
    id: 1,
    name: "PHARM- MODEL & POSTER",
    image: "/images/itr.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹3000/-",
  },
  {
    id: 2,
    name: "NURTRACEUTICAL FOOD EXHIBITION",
    image: "/images/exi.webp",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹4000/-",
  },
  {
    id: 3,
    name: "RIFLE SHOOTING",
    image: "/images/istockphoto-1357826058-612x612.jpg",
    price: "50/-",
    date: "2025-02-02",
    time: "5:00 PM",
    prize: "goodies",
  },
  {
    id: 4,
    name: "LIVE PAINTING & EXHIBITION",
    image: "/images/male-artist-painting-with-watercolor-studio.jpg",
    price: "150/-",
    date: "2025-02-03",
    time: "10:00 AM",
    prize: "₹2100/-",
  },
];

const Cdip = () => {
  const [activePreview, setActivePreview] = useState(null);

  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">LAW</h3>
      <div className="products-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => openPreview(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
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
                <h3> {product.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <i key={index}></i>
                  ))}
                </div>

                {/* Date, Time, Prize Row */}
                <div className="details-row">
                  <div className="detail-item">
                    <strong>Date:</strong> {product.date}
                  </div>
                  <div className="detail-item">
                    <strong>Time:</strong> {product.time}
                  </div>
                  <div className="detail-item">
                    <strong>Prize:</strong> {product.prize}
                  </div>
                </div>

                <div className="price">{product.price}</div>
                <div className="buttons">
                  <a href="/" className="buy">
                    About!
                  </a>
                  <a href="/" className="cart">
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

export default Cdip;
