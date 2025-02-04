import React, { useState, memo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// List of products for Civil
const products = [
  {
    id: 8,
    name: "TIC-TAC-TOE",
    image: "/images/6641733.jpg",
    price: "FEES:₹50/-",
    date: "27 March",
    time: "12:30 to 3:00PM",
    prize: "₹25,00/-",

    "1st prize": "₹15,00/-",
    "2nd prize": "₹1,000/-",
    venue: "Lawn front of Civil Dept",
    button: "See Details",
  },
  {
    id: 9,
    name: "JENGA BLOCK",
    image: "/images/business-concept-with-wooden-sticks.jpg",
    price: "FEES:₹50/-",
    date: "28-Mar-25",
    time: "12:30 PM to 3:00 PM",
    prize: "₹2000/-",

    "1st prize": "₹12,00/-",
    "2nd prize": "₹8,00/-",
    venue: "Lawn front of Civil Dept",
    button: "See Details",
  },
  {
    id: 10,
    name: "URBAN PLANNING",
    image: "/images/37652.jpg",
    price: "FEES:₹200/-",
    date: "29-Mar-25",
    time: "12:30 PM to 3:00 PM",
    prize: "₹6000/-",

    "1st prize": "₹4,000/-",
    "2nd prize": "₹2,000/-",
    venue: "CAD LAB",
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

const Civil = () => {
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
      <h3 className="title">CIVIL</h3>
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

export default Civil;
