import React, { useState } from "react";
import "./Robote.css";

const products = [
  {
    id: 1,
    name: "BOLLYBOOD BONANZA",
    image: "/images/bollywood-bonanza.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10000",
  },
  {
    id: 2,
    name: "DANCE(SOLO)(DUO)(GROUP)",
    image: "/images/dip-in-dance-mainbanner2.webp",
    price: "₹200/-|₹300/-|₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹10,000/-",
  },
  {
    id: 3,
    name: "BEAT THE STREAT (ROCK BAND)",
    image:
      "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
    price: "₹300/-",
    date: "DATE",
    time: "TIME",
    prize: "₹7500/-",
  },
  {
    id: 4,
    name: "OPEN MIC",
    image: "/images/openmic.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹4000/-",
  },
  {
    id: 5,
    name: "RAMP WALK(SOLO)(DUO)",
    image: "/images/ramp-walk-sep-2024.png",
    price: "₹250/-|₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹20,000/-",
  },
  {
    id: 6,
    name: "MASTER CHEF",
    image: "/images/imagesss.png",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "₹2,000/-",
  },
  {
    id: 7,
    name: "SCAVENGER HUNT",
    image: "/images/imageeeee.jpg",
    price: "₹150/-",
    date: "DATE",
    time: "TIME",
    prize: "GOODIES",
  },
  {
    id: 8,
    name: "SNAKE & LADDER",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹50/-",
    date: "DATE",
    time: "TIME",
    prize: "GOODIES",
  },
];

const Cdips = () => {
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
      <h3 className="title">CDIPS</h3>
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

export default Cdips;
