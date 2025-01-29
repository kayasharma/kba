import React, { useState } from "react";
import "./Robote.css";

const products = [
  {
    id: 1,
    name: "DEFEAT THE DEFECT",
    image: "/images/binary-code-digits-technology-software-concept.jpg",
    price: "100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 2,
    name: "HACK TRAIL",
    image: "/images/when-coding-is-criminal.webp",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000",
  },
  {
    id: 3,
    name: "BLIND CODING",
    image: "/images/images1.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
  {
    id: 4,
    name: "CODE ALGO",
    image: "/images/when-coding-is-criminal.jpg",
    price: "₹200/-",
    date: "DATE",
    time: "TIME",
    prize: "₹5,000/-",
  },
];

const Cs = () => {
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
      <h3 className="title">CS/CSIT/CMA</h3>
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

export default Cs;
