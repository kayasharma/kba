import React, { useState, memo } from "react";
import "./Robote.css";
import { Link } from "react-router-dom";

// List of products for CDIPS
const products = [
  {
    id: 56,
    name: "DJ EVENING",
    image: "/images/cb.jpg",
    price: "₹100/-",
    date: "29 Mar",
    time: "5:30 PM to 7:30 PM",

    venue: "lawn",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY):name",
    "phone no": "number",
    facultyno: "number",
  },
  {
    id: 14,
    name: "BOLLYBOOD BONANZA",
    image: "/images/bollywood-bonanza.jpg",
    price: "₹200/-",
    date: "27 Mar",
    time: "2:00 AM to 4:00 PM",
    prize: "₹3,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
    author: " Swayam Najan",
    author1: "HEAD(FACULTY):Prof. Kratika Gangwani,Prof.Shweta Meshram  ",
    "phone no": "8817449829,9755179162",
    facultyno: "9981163138",
    aboutFile: "/pdf/bollywoodbonanza.docx",
  },
  {
    id: 1,
    name: "DANCE(SOLO)",
    image: "/images/single.webp",
    price: "₹200/-",
    date: "27 Mar",
    time: "9:30 AM to 2:00 PM",
    prize: "₹25,00/-",
    "1st prize": "₹15,00/- ",
    "2nd prize": "₹1,000/- ",
    venue: "lawn",
    button: "See Details",
    author: "Gayatri Yadav ",
    author1: "HEAD(FACULTY): Prof. Shainee Solomon,Prof. Tanu Solanki  ",
    "phone no": " 8349347857,6267533985",
    facultyno: "7879619466",
    aboutFile: "/pdf/DanceEvent.docx",
  },
  {
    id: 2,
    name: "DANCE(DUO)",
    image: "/images/figure-skating-ice-arena.jpg",
    price: "₹300/-",
    date: "27 Mar",
    time: "9:30 AM to 2:00 PM",
    prize: "₹5,000/-",
    "1st prize": "₹3,000/-  ",
    "2nd prize": "₹2,000/- ",
    venue: "lawn",
    button: "See Details",
    author: "Gayatri Yadav ",
    author1: "HEAD(FACULTY): Prof. Shainee Solomon,Prof. Tanu Solanki  ",
    "phone no": " 8349347857,6267533985",
    facultyno: "7879619466",
    aboutFile: "/pdf/DanceEvent.docx",
  },
  {
    id: 2,
    name: "DANCE (GROUP)",
    image: "/images/group-modern-dancers.jpg",
    price: "₹500/-",
    date: "27 Mar",
    time: "9:30 AM to 2:00 PM",
    prize: "₹8,000/-",
    "1st prize": "₹5,000/- ",
    "2nd prize": "₹3,000/- ",
    venue: "lawn",
    button: "See Details",
    author: "Gayatri Yadav ",
    author1: "HEAD(FACULTY): Prof. Shainee Solomon,Prof. Tanu Solanki  ",
    "phone no": " 8349347857,6267533985",
    facultyno: "7879619466",
    aboutFile: "/pdf/DanceEvent.docx",
  },
  {
    id: 26,
    name: "BEAT THE STREAT (ROCK BAND)",
    image:
      "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
    price: "₹300/-",
    date: "28 Mar",
    time: "9:30 AM to 1:00 PM",
    prize: "₹5000/-",
    "1st prize": "₹5,000/-",
    aboutFile: "/pdf/beatthestreat.pdf",
    venue: "lawn",
    button: "See Details",

    author: " Divyanshu Solanki, Jigyasha Trivedi",
    author1: "HEAD(FACULTY):Dr. Dileep Rupale, Prof. Olinka Panhalkar",
    "phone no": " 8770884886, 8827060214",
    facultyno: " 9685300378, 9340057527",
  },
  {
    id: 27,
    name: "BEAT THE STREAT (singing)(solo/duo)",
    image:
      "/images/young-caucasian-musicians-band-performing-neon-light-blue-studio.jpg",
    price: "₹300/-",
    date: "28 Mar",
    time: "9:30 AM to 1:00 PM",
    prize: "₹2,000/-",
    "1st prize": "₹12,00/-",
    "2nd prize": "₹8,00/-",
    venue: "lawn",
    button: "See Details",
    author: " Divyanshu Solanki, Jigyasha Trivedi",
    author1: "HEAD(FACULTY):Dr. Dileep Rupale, Prof. Olinka Panhalkar",
    "phone no": " 8770884886, 8827060214",
    facultyno: " 9685300378, 9340057527",
    aboutFile: "/pdf/beatthestreat.pdf",
  },

  {
    id: 29,
    name: "OPEN MIC",
    image: "/images/openmic.jpg",
    price: "₹200/-",
    date: "28 Mar",
    time: "10:00 AM to 12:30 PM",
    prize: "₹3,000/-",
    "1st prize": "₹2,000/-",
    "2nd prize": "₹1,000/-",
    venue: "seminar hall 1",
    button: "See Details",
    author: "Krish Choudhary",
    author1:
      "HEAD(FACULTY): Prof. Sachin Tripahti,Prof. Gunjan Soni, Prof. Raunak Randive",

    "phone no": "9754722078,9950356107,8770989009",
    facultyno: "8827068889",
    aboutFile: "/pdf/OpenMic.pdf",
  },
  {
    id: 44,
    name: "RAMP WALK(SOLO)",
    image: "/images/ramp-walk-sep-2024.png",
    price: "₹250/-",
    date: "29 Mar",
    time: "10:00 AM to 2:00 PM",
    prize: "₹20,000/-",
    "1st prize": "₹5,000/-",
    "2nd prize": "₹3,000/-",
    venue: "lawn",
    button: "See Details",
    author: "Sneha Dongre",
    author1: "HEAD(FACULTY):Prof. Rajani Ahirwar,Dr. Gayatri Sharma",
    "phone no": "7869174605,9827882950",
    facultyno: "8871998415",
    aboutFile: "/pdf/rampwalk.pdf",
  },
  {
    id: 45,
    name: "RAMP WALK(DUO)",
    image: "/images/ramp-walk-sep-2024.png",
    price: "₹500/-",
    date: "29 Mar",
    time: "10:00 AM to 2:00 PM",
    prize: "₹20,000/-",
    "1st prize": "₹7,000/-",
    "2nd prize": "₹5,000/-",
    venue: "lawn",
    button: "See Details",
    author: "Sneha Dongre",
    author1: "HEAD(FACULTY):Prof. Rajani Ahirwar,Dr. Gayatri Sharma",
    "phone no": "7869174605,9827882950",
    facultyno: "8871998415",
    aboutFile: "/pdf/rampwalk.pdf",
  },

  {
    id: 19,
    name: "SCAVENGER HUNT",
    image: "/images/imageeeee.jpg",
    price: "₹150/-",
    date: "27-28 Mar",
    time: "Full Day",
    prize: "GOODIES",

    venue: "cricket ground",
    button: "See Details",
    author: "lead",
    author1: "HEAD(FACULTY): name",
    "phone no": "number",
    facultyno: "number",
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

const Specialevents = () => {
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
      <h3 className="title">ENTERTAINMENT</h3>
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

export default Specialevents;
