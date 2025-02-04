import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";

const products = [
  {
    id: 14,
    name: "ROBO-RACE",
    image: "/images/robot-car.jpg",
    price: "₹500/-",

    venue: "Area Near Gym",
    date: "27-28 Mar",
    time: "10:00 AM to 3:00 PM",
    prize: "₹12000/-",
    "1st prize": "₹8,000/-",
    "2nd prize": "₹4,000/-",

    button: "See Details",
  },
  {
    id: 15,
    name: "ROBO-SOCCER",
    image: "/images/ROBO-SOC.jpg",
    price: "₹500/-",

    date: "28-29 Mar",
    time: "10:00 AM to 3:00 PM",
    venue: "lawn",
    prize: "₹12000/-",
    "1st prize": "₹8,000/-",
    "2nd prize": "₹4,000/-",

    button: "See Details",
  },
  {
    id: 16,
    name: "LINE FOLLOWER",
    image: "/images/F9VN87EKF2JF951.webp",
    price: "₹500/-",

    venue: "class-room near sports cabin",
    date: "28-29 Mar",
    time: "10:00 AM to 3:00 PM",
    prize: "₹15000/-",
    "1st prize": "₹10,000/-",
    "2nd prize": "₹5,000/-",

    button: "See Details",
  },
];

// 🟢 Memoized ProductCard to prevent unnecessary re-renders
const ProductCard = memo(({ product, openPreview }) => {
  return (
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
  );
});

const Robote = () => {
  const [activePreview, setActivePreview] = useState(null);

  // 🟢 Memoize filtered product to prevent recalculating on every render
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  return (
    <div className="container">
      <h3 className="title">ROBOTICS</h3>
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            openPreview={setActivePreview}
          />
        ))}
      </div>

      {activeProduct && (
        <div className="products-preview active">
          <div className="preview">
            <i
              className="fas fa-times"
              onClick={() => setActivePreview(null)}
            ></i>
            <img src={activeProduct.image} alt={activeProduct.name} />
            <h3>{activeProduct.name}</h3>

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

export default Robote;
