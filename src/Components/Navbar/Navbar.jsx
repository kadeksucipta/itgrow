import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo_text.png";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="parent-navbar">
        <img className="img-logo" src={logo} alt="" />
        <div className="parent-text-nav">
          <li className="item-nav">Home</li>
          <li className="item-nav">Price</li>
          <li className="item-nav">Portofolio</li>
          <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
            <button className="btn-nav">Konsultasi</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
