import React from "react";
import "./Layanan.css";
import layananWeb from "../../Assets/layanan/jasa_web.png";
import layananDesain from "../../Assets/layanan/jasa_desain.png";
import layananLogo from "../../Assets/layanan/jasa_logo.png";
import layananAds from "../../Assets/layanan/jasa_ads.png";

const Layanan = () => {
  return (
    <React.Fragment>
      <div className="parent-layanan">
        <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20saya%20mau%20order%20Web%20dong">
          <img className="img-layanan" src={layananWeb} alt="" />
        </a>
        <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20saya%20mau%20order%20Desain%20dong">
          <img className="img-layanan" src={layananDesain} alt="" />
        </a>
        <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20saya%20mau%20order%20Logo%20dong">
          <img className="img-layanan" src={layananLogo} alt="" />
        </a>
        <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20saya%20mau%20order%20Jasa%20Ads%20dong">
          <img className="img-layanan" src={layananAds} alt="" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default Layanan;
