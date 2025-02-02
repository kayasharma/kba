import React, { useState } from "react";
import "./Contactus.css"; // Assuming you have the same style.css

const Contactus = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputFocus = (e) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const handleInputBlur = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log(inputs);
  };

  return (
    <div className="containeer">
      <span className="big-circlee"></span>
      <img src="/img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="textt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <img src="/img/location.png" className="icon" alt="" />
              <p>cdgi</p>
            </div>
            <div className="information">
              <img src="/img/email.png" className="icon" alt="" />
              <p>mail</p>
            </div>
            <div className="information">
              <img src="/img/phone.png" className="icon" alt="" />
              <p>number</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-formm">
          <span className="circlee one"></span>
          <span className="circlee two"></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="titlee">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="inputt"
                value={inputs.name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="inputt"
                value={inputs.email}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="inputt"
                value={inputs.phone}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="inputt"
                value={inputs.message}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
