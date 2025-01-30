import React, { useState } from "react";
import "./Pahal.css";

const products = [
  {
    id: 1,
    name: "PROJECT COMPITITION (H/W & S/W)",
    image: "/images/ppt.webp",
    price: "₹500/-",

    date: "DATE",
    time: "TIME",
    prize: "₹50,000/-",
  },
];

const Pahal = () => {
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
      <h3 className="title">PAHAL</h3>
      <div className="products-containerr">
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

export default Pahal;
