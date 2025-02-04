import React, { useState, memo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// List of products for CS/CSIT/CMA
const products = [
  {
    id: 1,
    name: "CODEOLOGY",
    image: "/images/back.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "12:00 AM to 2:00 PM",
    prize: "₹5000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 2,
    name: "TECH ESCAPE ROOM",
    image: "/images/hq720.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "9:30 AM to 11:30 AM",
    prize: "₹3500/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 3,
    name: "DEV-HACK-SPRINT",
    image: "/images/banner.png",
    price: "₹500/-",
    date: "28-Mar",
    time: "9:00 AM to 4:00 PM",
    prize: "₹30,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 4,
    name: "DEFEAT THE DEFECT",
    image: "/images/binary-code-digits-technology-software-concept.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "9:30 AM to 11:30 AM",
    prize: "₹5,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 5,
    name: "HACK TRAIL",
    image: "/images/when-coding-is-criminal.webp",
    price: "₹200/-",
    date: "29-Mar",
    time: "11:30 AM to 1:30 PM",
    prize: "₹5,000",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 6,
    name: "BLIND CODING",
    image: "/images/images1.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "2:00 PM to 4:00 PM",
    prize: "₹5,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
  {
    id: 7,
    name: "CODE ALGO",
    image: "/images/when-coding-is-criminal.jpg",
    price: "₹200/-",
    date: "29-Mar",
    time: "1:30 PM to 3:30 PM",
    prize: "₹5,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
  },
];

// Memoized product card component
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

const Cs = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Open preview of selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId); // Debugging
    setActivePreview(productId);
  };

  // Close product preview
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
      <h3 className="title">SOFTWARE</h3>
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
                <strong>3rd Prize:</strong> {activeProduct["3rd prize"]}
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

export default Cs;
