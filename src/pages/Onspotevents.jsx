import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// Product data
const products = [
  {
    id: 37,
    name: "RIFLE SHOOTING",
    image: "/images/istockphoto-1357826058-612x612.jpg",
    price: "50/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "goodies",
    venue: " Admission Lawn",
    button: "See Details",
  },
  {
    id: 8,
    name: "SNAKE & LADDER",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹50/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "GOODIES",
    venue: " Admission Lawn",
    button: "See Details",
  },
  {
    id: 53,
    name: "BALLOON GAME",
    image: "/images/arm-releasing-balloons.jpg",
    price: "₹30/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "GOODIES",
    venue: " Admission Lawn",
    button: "See Details",
  },
  {
    id: 54,
    name: "1-MINUTE GAMES",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹30/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "GOODIES",
    venue: " Admission Lawn",
    button: "See Details",
  },
  {
    id: 55,
    name: "ROLL THE BALL",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹30/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "GOODIES",
    venue: " Admission Lawn",
    button: "See Details",
  },
  {
    id: 56,
    name: "HAND-LEG CHALLENGE",
    image: "/images/63433c0468fb4d5c9e7274c32e689174.jpeg",
    price: "₹100/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "100/-",
    venue: " Admission Lawn",
    button: "See Details",
  },
];

// 🟢 Memoized ProductCard to prevent unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
    <div className="product" onClick={() => openPreview(product.id)}>
      <img
        src={product.image}
        alt={product.name}
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
        loading="lazy" // Lazy loading for images
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
  );
});

const Onspotevents = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to avoid unnecessary re-renders
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  // Open the preview for the selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  // Close the preview
  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">ON SPOT EVENTS</h3>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openPreview={openPreview}
          />
        ))}
      </div>

      {activePreview && activeProduct && (
        <div className="products-preview active">
          <div className="preview">
            <i
              className="fas fa-times"
              onClick={closePreview}
              aria-label="Close preview"
            ></i>
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              loading="lazy" // Lazy loading for the preview image
            />
            <h3>{activeProduct.name}</h3>

            {/* Date, Time, Prize Row */}
            <div className="details-row">
              <div className="detail-item">
                <strong>Time:</strong> {activeProduct.time}
              </div>
              <div className="detail-item">
                <strong>Venue:</strong> {activeProduct.venue}
              </div>
              <div className="detail-item">
                <strong> Prize:</strong> {activeProduct.prize}
              </div>
            </div>
            <div className="price">{activeProduct.price}</div>
            <div className="buttons">
              <a href="/" className="buy">
                About!
              </a>
              <a href="/Register" className="cart">
                Participate now!
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Onspotevents;
