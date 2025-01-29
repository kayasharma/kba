import React, { useState } from "react";
import "./Robote.css";

const products = [
  {
    id: 1,
    name: "POSTER MAKING COMPETETION",
    image: "/images/hands-working.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 2,
    name: "AD MAD SHOW",
    image: "/images/6683.jpg",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10,000",
  },
  {
    id: 3,
    name: "CITRONICS REEL MAKING",
    image: "/images/hi.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 4,
    name: "CITRONICS PHOTOGRAPHY",
    image: "/images/photo.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5000/-",
  },
  {
    id: 5,
    name: "BRAND QUIZ",
    image: "/images/97350-OKYIEE-393.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7000/-",
  },
  {
    id: 6,
    name: "CASE WRITING COMPETITION",
    image: "/images/20943483.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7000/-",
  },
];

const Management = () => {
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
      <h3 className="title">MANAGEMENT</h3>
      <div className="products-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => openPreview(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">{product.price}</div>
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

export default Management;
