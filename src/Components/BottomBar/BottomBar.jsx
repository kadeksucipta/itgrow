import React from "react";
import iconHome from "../../Assets/borrom_bar/icon_home.png"
import iconPrice from "../../Assets/borrom_bar/icon_price.png"
import iconPorto from "../../Assets/borrom_bar/icon_porto.png"
import iconKonsul from "../../Assets/borrom_bar/icon_cs.png"
import "./BottomBar.css"

const BottomBar = () => {
  return (
    <React.Fragment>
      <div className="parent-bootombar">
        <div id="bottom-bar">
          <div   className="bottom-bar-element">
            {/* <FontAwesomeIcon icon={faHouse} /> */}
            <img className="icon-home-bottombar" src={iconHome} alt="" />
            <br />
            <span className="text-bottombar">Home</span>
          </div>
          <div className="bottom-bar-element">
            <img className="icon-home-bottombar" src={iconPrice} alt="" />
            <br />
            <span className="text-bottombar">Price</span>
          </div>
          <div className="bottom-bar-element">
            <img className="icon-home-bottombar-about" src={iconPorto} alt="" />
            <br />
            <span className="text-bottombar">Porto</span>
          </div>
          <div className="bottom-bar-element">
            <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
              <img className="icon-home-bottombar" src={iconKonsul} alt="" />
              <br />
              <span className="text-bottombar">Konsultasi</span>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BottomBar;
