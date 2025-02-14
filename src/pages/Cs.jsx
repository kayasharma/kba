import React, { useState, memo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// List of products for CS/CSIT/CMA
const products = [
  {
    id: 11,
    name: "CODEOLOGY",
    image:
      "/images/programming-background-with-person-working-with-codes-computer.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "12:00 AM to 2:00 PM",
    prize: "₹5000/-",
    "1st prize": "₹25,00/-",
    "2nd prize": "₹15,00/-",
    "3rd prize": "₹1,000/-",
    venue: "Lab 8, Lab 9",
    button: "See Details",
    aboutFile: "/pdf/codeology.pdf", // Path to the docx file for this event
  },
  {
    id: 40,
    name: "TECH ESCAPE ROOM",
    image: "/images/hq720.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "9:30 AM to 11:30 AM",
    prize: "₹3500/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹5,00/-",
    venue: " Lab 6, Lab 7",
    button: "See Details",
    aboutFile: "/pdf/TechSpaceRoom.pdf", // Path to the docx file for this event
  },
  {
    id: 25,
    name: "DEV-HACK-SPRINT",
    image: "/images/banner.png",
    price: "₹500/-",
    date: "28-Mar",
    time: "9:00 AM to 4:00 PM",
    prize: "₹30,000/-",
    "1st prize": "₹15,000/-",
    "2nd prize": "₹10,000/-",
    "3rd prize": "₹5,000/-",
    venue: "Lab 6-7-8-9",
    button: "See Details",
    aboutFile: "/pdf/DevHackSprint.pdf", // Path to the docx file for this event
  },
  {
    id: 4,
    name: "DEFEAT THE DEFECT",
    image: "/images/binary-code-digits-technology-software-concept.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "9:30 AM to 11:30 AM",
    prize: "₹5,000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",

    venue: " Lab 6, Lab 7",
    button: "See Details",
    aboutFile: "/pdf/DefeattheDefect.pdf", // Path to the docx file for this event
  },
  {
    id: 48,
    name: "HACK TRAIL",
    image: "/images/when-coding-is-criminal.webp",
    price: "₹200/-",
    date: "29-Mar",
    time: "11:30 AM to 1:30 PM",
    prize: "₹5,000",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",

    venue: " Lab 8, Lab 9",
    button: "See Details",
    aboutFile: "/pdf/HackTrailEvent.pdf", // Path to the docx file for this event
  },
  {
    id: 13,
    name: "BLIND CODING",
    image: "/images/images1.jpg",
    price: "₹100/-",
    date: "27-Mar",
    time: "2:00 PM to 4:00 PM",
    prize: "₹5,000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",

    venue: "Lab 6, Lab 7",
    button: "See Details",
    aboutFile: "/pdf/codeolog.pdf", // Path to the docx file for this event
  },
  {
    id: 50,
    name: "CODE ALGO",
    image: "/images/when-coding-is-criminal.jpg",
    price: "₹200/-",
    date: "29-Mar",
    time: "1:30 PM to 3:30 PM",
    prize: "₹5,000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",

    venue: " Lab 6, Lab 7",
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

export default Cs;
