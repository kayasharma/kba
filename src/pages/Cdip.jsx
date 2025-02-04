import React, { useState, memo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// List of products for CDIP
const products = [
  {
    id: 35,
    name: "PHARM- MODEL & POSTER",
    image: "/images/itr.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹3000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 36,
    name: "NURTRACEUTICAL FOOD EXHIBITION",
    image: "/images/exi.webp",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹4000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },

  {
    id: 38,
    name: "LIVE PAINTING & EXHIBITION",
    image: "/images/male-artist-painting-with-watercolor-studio.jpg",
    price: "150/-",
    date: "2025-02-03",
    time: "10:00 AM",
    prize: "₹2100/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 52,
    name: "THINK TANK",
    image: "/images/male-artist-painting-with-watercolor-studio.jpg",
    price: "200/-",
    date: "2025-02-03",
    time: "10:00 AM",
    prize: "₹5,200/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
];

// Memoized ProductCard Component
const ProductCard = memo(({ product, openPreview }) => (
  <div className="product" onClick={() => openPreview(product.id)}>
    <img
      src={product.image}
      srcSet={`${product.image}?w=300 300w, ${product.image}?w=600 600w`}
      sizes="(max-width: 600px) 300px, 600px"
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
));

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

  // Find the active product
  const activeProduct = products.find(
    (product) => product.id === activePreview
  );

  return (
    <div className="container">
      <h3 className="title">PHARMACY</h3>
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
            <img src={activeProduct.image} alt={activeProduct.name} />
            <h3>{activeProduct.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i key={index}></i>
              ))}
            </div>

            {/* Date, Time, Prize Row */}
            <div className="details-row">
              <div className="detail-item">
                <strong>Time:</strong> {activeProduct.time}
              </div>
              <div className="detail-item">
                <strong>Venue:</strong> {activeProduct.venue}
              </div>
              <div className="detail-item">
                <strong>1st Prize:</strong> {activeProduct["1st prize"]}
                <strong>2nd Prize:</strong> {activeProduct["2nd prize"]}
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

export default Cdip;
