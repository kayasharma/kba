import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// List of products in the 'Law' category
const products = [
  {
    id: 28,
    name: "RANGMANCH (CYBER SENTINEL)",
    image: "/images/kyle-head-p6rNTdAPbuk-unsplash.jpg",
    price: "₹500/-",
    date: "28 Mar",
    time: "10:00 AM to 1:00 PM",
    prize: "₹8000/-",
    "1st prize": "₹5,000/-",
    "2nd prize": "₹3,000/-",
    venue: " CDGI Entrance",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):name",
    "phone no": "no",
    facultyno: "number",
  },
  {
    id: 9,
    name: "DEBATE COMETITION (BATTLE OF WITS)",
    image: "/images/banner12-03.png",
    price: "₹100/-",
    date: "27 Mar",
    time: "12:00 Noon to 2:00 PM",
    prize: "₹1000/-",
    "1st prize": "₹6,00/-",
    "2nd prize": "₹4,00/-",
    venue: "Chanakya Sabhagrah",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):name",
    "phone no": "no",
    facultyno: "number",
  },

  {
    id: 35,
    name: "ANTAKSHRI COMPETITION",
    image: "/images/Slide1-1024x576-1.jpg",
    price: "₹250/-",
    date: "28 Mar",
    time: "2:00 PM to 4:00 PM",
    prize: "₹2000/-",
    "1st prize": "₹12,00/-",
    "2nd prize": "₹8,00/-",
    venue: "lawn",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):name",
    "phone no": "no",
    facultyno: "number",
  },
  {
    id: 41,
    name: "BEST OUT OF WEST (Trash to Treasure)",
    image: "/images/best-out-of-waste-idea-rabbit_0_1200.jpg",
    price: "₹100/-",
    date: "29 Mar",
    time: "10:00 AM to 1:00 PM",
    prize: "₹11,000/-",
    "1st prize": "₹7,00/-",
    "2nd prize": "₹4,00/-",
    venue: " CDIPS Reception Area",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):name",
    "phone no": "no",
    facultyno: "number",
  },
];

// Memoized component for each product to avoid unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
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
        <div style={{ display: "flex", justifyContent: "space-between" }}></div>
        <p className="date">{product.date}</p>
        <h3>{product.name}</h3>
        <p className="author1">{product.author1}</p>
        <p className="author1"> Mobile Number: {product["phone no"]}</p>
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

const Law = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the active product to prevent unnecessary recalculations
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
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
                <strong> Head (student):</strong> {activeProduct.author}
              </div>
              <div className="detail-item">
                <strong>Venue:</strong> {activeProduct.venue}
                <strong> Head Number:</strong>
                {activeProduct.facultyno}
              </div>
              <div className="detail-item">
                <strong>1st Prize:</strong> {activeProduct["1st prize"]}
                <strong>2nd Prize:</strong> {activeProduct["2nd prize"]}
              </div>
            </div>{" "}
            <div className="price">{activeProduct.price}</div>
            <div className="buttons">
              <a
                href={activeProduct.aboutFile}
                className="buy"
                target="_blank" // Open the .pdf file in a new tab
                rel="noopener noreferrer"
              >
                About
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

export default Law;
