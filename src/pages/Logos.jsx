import React from "react";
import "./Logos.css"; // Make sure you save the CSS in this file

const Logos = () => {
  return (
    <div className="logos">
      <h1>SPONSERS</h1>
      <div className="logos-slide">
        <img src="/logos/3mm.svg" alt="3M logo" />
        <img src="/logos/bbarstool-store.svg" alt="Barstool logo" />
        <img src="/logos/bbudweiser.svg" alt="Budweiser logo" />
        <img src="/logos/bbuzzfeed.svg" alt="Buzzfeed logo" />
        <img src="/logos/fforbes.svg" alt="Forbes logo" />
        <img src="/logos/mmacys.svg" alt="Macy's logo" />
        <img src="/logos/mmenshealth.svg" alt="Men's Health logo" />
        <img src="/logos/mmrbeast.svg" alt="MrBeast logo" />
      </div>
    </div>
  );
};

export default Logos;
