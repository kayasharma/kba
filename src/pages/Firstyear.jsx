import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// Product data
const products = [
  {
    id: 19,
    name: "MEHANDI MAKING",
    image: "/images/7.jpg",
    price: "₹100/-",
    date: "28 Mar",
    time: "12:00 Noon to 2:00 PM",
    prize: "₹3000/-",
    "1st prize": "₹15,00/-",
    "2nd prize": "₹1,000/-",
    "3rd prize": "₹5,00/-",

    venue: "YOGA Centre",
    button: "See Details",
  },

  {
    id: 17,
    name: "SCIENCE MODEL COMPITITION (School)",
    image: "/images/science.webp",
    price: "₹100/-",
    date: "27 Mar",
    time: "1:00 PM to 3:00 PM",
    prize: "₹11,000/-",
    "1st prize": "₹5,000/-",
    "2nd prize": "₹35,00/-",
    "3rd prize": "₹25,00/-",
    venue: "Gound Floor Lab Outside Area",
    button: "See Details",
  },
  {
    id: 18,
    name: "SCIENCE MODEL COMPITITION (College)",
    image: "/images/science.webp",
    price: "₹200/-",
    date: "28 Mar",
    time: "1:00 PM to 3:00 PM",
    prize: "₹11,000/-",
    "1st prize": "₹5,000/-",
    "2nd prize": "₹35,00/-",
    "3rd prize": "₹25,00/-",
    venue: "Gound Floor Lab Outside Area",
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
        width="300"
        height="200"
        style={{ objectFit: "cover" }}
        loading="lazy" // Lazy loading for images
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

const Firstyear = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to avoid unnecessary re-renders
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
      <h3 className="title">ON SPOT EVENTS</h3>
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
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              loading="lazy" // Lazy loading for the preview image
            />
            <h3>{activeProduct.name}</h3>

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

export default Firstyear;
