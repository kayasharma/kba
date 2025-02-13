import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// Product data
const products = [
  {
    id: 17,
    name: "GO-CART",
    image: "/images/karting-driver-helmet-kart-circuit.jpg",
    price: "₹100/-",
    date: "27 Mar",
    time: "12:00 Noon to 4:00 PM",
    prize: "₹5000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",
    venue: "bus parking area",
    button: "See Details",
  },
  {
    id: 30,
    name: "SKETCH YOUR IMAGINATION",
    image: "/images/close-up-hand-drawing-paper.jpg",
    price: "₹100/-",
    date: "28 Mar",
    time: "10:00 Noon to 1:00 PM",
    prize: "₹4500/-",
    "1st prize": "₹25,00/-",
    "2nd prize": "₹12,00/-",
    "3rd prize": "₹8,00/-",
    venue: "drawing hall",
    button: "See Details",
  },
  {
    id: 43,
    name: "CAD CAMP",
    image: "/images/large.jpg",
    price: "₹100/-",
    date: "29 Mar",
    time: "10:00 AM to 1:00 PM",
    prize: "₹2500/-",
    "1st prize": "₹15,00/-",
    "2nd prize": "₹1,000/-",
    venue: "cad club",
    button: "See Details",
  },
];

// Memoized ProductCard component to avoid unnecessary re-renders
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
        decoding="async"
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

const Mech = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Memoize the active product to prevent unnecessary recalculations
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  // Open the preview for the selected product
  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
    setActivePreview(productId);
  };

  // Close the preview
  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">MECHANICAL</h3>
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
              loading="lazy"
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
              <a
                href={activeProduct.aboutFile} // Add the link to the .docx file for this product
                className="buy"
                download
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

export default Mech;
