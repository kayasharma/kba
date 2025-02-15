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
    date: "28 March 2025",
    time: " 12 to 2 PM",
    prize: "₹3,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "CDIP First floor",
    button: "See Details",
    author: "Harish Prajapat",
    author1: "HEAD(FACULTY):Prof. Saurabh D Jain",
    "phone no": "9617342081",
    facultyno: "9826577789",
    aboutFile: "/pdf/Pharma-Model.pdf", // Path to the docx file for this event
  },
  {
    id: 31,
    name: "NURTRACEUTICAL FOOD EXHIBITION",
    image: "/images/exi.webp",
    price: "₹500/-",
    date: "28 March 2025",
    time: "TIME",
    prize: "₹4,600/-",
    "1st prize": "₹3,100/-",
    "2nd prize": "₹1,500/-",
    venue: " CDIP Ground Floor",
    button: "See Details",
    author: "Ms. Riya Kawale",
    author1: "HEAD(FACULTY): Prof. Dheeraj Gour",
    "phone no": "9713339920",
    facultyno: "8878546083",
    aboutFile: "/pdf/Pharm- Nutraceutical Food Exhibition.pdf",
  },

  {
    id: 46,
    name: "LIVE PAINTING & EXHIBITION",
    image: "/images/male-artist-painting-with-watercolor-studio.jpg",
    price: "150/-",
    date: "29 March 2025",
    time: "10:00 AM",
    prize: "₹5,200/-",
    "1st prize": "₹3,100/-",
    "2nd prize": "₹2,100/-",
    venue: "CDIP Corridor Ground Floor",
    button: "See Details",
    author: "Mr. S. Aarya",
    author1: "HEAD(FACULTY): Prof. Kratika Dubey ",
    "phone no": "9617996090",
    facultyno: "6207544034",
    aboutFile: "/pdf/Painting Exhibition.pdf", // Path to the docx file for this event
  },
  {
    id: 47,
    name: "THINK TANK",
    image: "/images/23249.jpg",
    price: "200/-",
    date: "29 March 2025",
    time: "10:00 AM",
    prize: "₹5,200/-",
    "1st prize": "₹3,100/-",
    "2nd prize": "₹2,100/-",
    venue: "CDIP Seminar Hall",
    button: "See Details",
    author: " Mr. Shivam Bhadoriya",
    author1: "HEAD(FACULTY): Prof. Jaydeep Singh Baghel",
    "phone no": "7000730300",
    facultyno: "9685753365",
    aboutFile: "/pdf/ThinkTank.pdf", // Path to the docx file for this event
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

export default Cdip;
