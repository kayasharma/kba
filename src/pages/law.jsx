import React, { useState } from "react";
import "./Robote.css";

const products = [
  {
    id: 1,
    name: "SKIT/MIME/DRAMA COMPETITION",
    image: "/images/kyle-head-p6rNTdAPbuk-unsplash.jpg",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹8000/-",
  },
  {
    id: 2,
    name: "DEBATE COMETITION",
    image: "/images/banner12-03.png",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹1000/-",
  },
  {
    id: 3,
    name: "MOOT COURT",
    image: "/images/Moot-Court-Small-Feature-Image.png",
    price: "₹500/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
  {
    id: 4,
    name: "ANTAKSHRI COMPETITION",
    image: "/images/Slide1-1024x576-1.jpg",
    price: "₹250/-",
    date: "DATE",
    time: "TIME",
    prize: "₹2000/-",
  },
  {
    id: 5,
    name: "BEST OUT OF WEST ",
    image: "/images/best-out-of-waste-idea-rabbit_0_1200.jpg",
    price: "₹100/-",
    date: "DATE",
    time: "TIME",
    prize: "₹11,000/-",
  },
];

const Law = () => {
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
      <h3 className="title">LAW</h3>
      <div className="products-container">
        {products.map((product) => (
          <div
            className="product"
            key={product.id}
            onClick={() => openPreview(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
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

export default Law;
