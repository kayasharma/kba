import React, { useState, memo, useMemo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";
// Updated products array with sequential ids (39, 40, 41, ...)
const products = [
  {
    id: 5,
    name: "MASTER CHEF",
    image: "/images/imagesss.png",
    price: "₹200/-",
    date: "27 Mar",
    time: "10:00 to 12:00 Noon",
    prize: "₹3,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "CDIPS Entrance",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):Dr. Monika Agrawal,Prof. Namandeep Singh Chadha",
    "phone no": "8319057549,9713389900",
    facultyno: "number",
    aboutFile: "/pdf/MasterChef.pdf",
  },
  {
    id: 8,
    name: "POSTER MAKING COMPETETION",
    image: "/images/hands-working.jpg",
    price: "₹200/-",
    date: "27 Mar",
    time: "10:00 to 12:00 Noon",
    prize: "₹5,000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",
    venue: "drawing hall",
    button: "See Details",
    author: "",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "",
    aboutFile: "/pdf/PosterMakingCompetition.pdf",
  },
  {
    id: 42,
    name: "AD MAD SHOW",
    image: "/images/6683.jpg",
    price: "₹500/-",
    date: "29 Mar",
    time: "10 AM to 1:00 PM",
    prize: "₹7,000",
    "1st prize": "₹45,00/-",
    "2nd prize": "₹25,00/-",
    venue: "seminar hall 1",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "number",
    aboutFile: "/pdf/AdMadShow.pdf",
  },
  {
    id: 53,
    name: "CITRONICS REEL MAKING",
    image: "/images/hi.jpg",
    price: "₹150/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "₹5000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",
    aboutFile: "/pdf/Photography&ReelMakingCompetition.pdf",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "number",
  },
  {
    id: 54,
    name: "CITRONICS PHOTOGRAPHY",
    image: "/images/photo.jpg",
    price: "₹150/-",
    date: "27-28-29 Mar",
    time: "Full Day",
    prize: "₹5000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    aboutFile: "/pdf/Photography&ReelMakingCompetition.pdf",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "number",
  },
  {
    id: 16,
    name: "BRAND QUIZ",
    image: "/images/97350-OKYIEE-393.jpg",
    price: "₹200/-",
    date: "27 Mar",
    time: "1:00 PM to 3:00PM",
    prize: "₹5000/-",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",
    venue: "Chanakya Sabhagrah",
    button: "See Details",
    aboutFile: "/pdf/BrandQuiz.pdf",
    author: "lead",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "number",
  },
  {
    id: 32,
    name: "CASE WRITING COMPETITION",
    image: "/images/20943483.jpg",
    price: "₹200/-",
    date: "28 Mar",
    time: "11:00 AM to 3:00PM",
    prize: "₹5,000/-",
    aboutFile: "/pdf/CasePresentationCompetition.pdf",
    "1st prize": "₹3,000/-",
    "2nd prize": "₹2,000/-",
    venue: "seminar hall 2",
    button: "See Details",
    author: "",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "",
  },
];

// Memoized ProductCard component to avoid unnecessary re-renders
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
  );
});

const Management = () => {
  const [activePreview, setActivePreview] = useState(null);

  // Use memo to only recalculate activeProduct when activePreview changes
  const activeProduct = useMemo(
    () => products.find((product) => product.id === activePreview),
    [activePreview]
  );

  const openPreview = (productId) => {
    console.log("Opening preview for product:", productId);
    setActivePreview(productId);
  };

  const closePreview = () => {
    console.log("Closing preview");
    setActivePreview(null);
  };

  return (
    <div className="container">
      <h3 className="title">MANAGEMENT</h3>
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

export default Management;
