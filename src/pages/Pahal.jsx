import React, { useState, useMemo, memo } from "react";
import "./Pahal.css";
import { Link } from "react-router-dom";
const products = [
  {
    id: 20,
    name: "PROJECT COMPETITION (H/W & S/W)",
    image: "/images/ppt.webp",
    price: "₹500/-",
    date: "27-Mar",
    time: "10:00 AM to 3:00 PM",
    prize: "₹50,000/-",
    "1st prize": "₹12,000/-",
    "2nd prize": "₹8,000/-",
    "3rd prize": "₹5,000/-",
    venue: "seminar hall 1",
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
        loading="lazy" // Lazy load product images
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

const Pahal = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to avoid unnecessary re-renders when the product list does not change
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
      <h3 className="title">PAHAL</h3>
      <div className="products-containerr">
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
            <i className="fas fa-times" onClick={closePreview}></i>
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              loading="lazy" // Lazy load preview image
            />
            <h3>{activeProduct.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <i key={index}></i>
              ))}
            </div>

            {/* Date, Time, Prize Row */}
            <div className="details-row">
              <div className="detail-item">
                <strong>Time:</strong> {products.time}
              </div>
              <div className="detail-item">
                <strong>Venue:</strong> {products.venue}
              </div>
              <div className="detail-item">
                <strong>1st Prize:</strong> {products["1st prize"]}
                <strong>2nd Prize:</strong> {products["2nd prize"]}
                <strong>3rd Prize:</strong> {products["3rd prize"]}
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

export default Pahal;
