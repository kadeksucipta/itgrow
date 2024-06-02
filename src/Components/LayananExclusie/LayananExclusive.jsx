import React from "react";
import Carousel from "react-multi-carousel";
import "./LayananExclusive.css";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import exclusive1 from "../../Assets/product/product_exclusive_1.png";
import exclusive2 from "../../Assets/product/product_exclusive_2.png";

import exclusiveMobile1 from "../../Assets/product/product_exclusive_1_v_mobile.png";
import exclusiveMobile2 from "../../Assets/product/product_exclusive_2_v_mobile.png";


const LayananExclusive = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    className: "button-slider",
  };
  return (
    <React.Fragment>
      <div className="slider-top" style={{ background: "" }}>
        <Slider {...settings}>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={exclusive1} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={exclusive2} alt="" />
              </a>
            </div>
          </div>
        </Slider>
      </div>

      <div className="slider-top-2" style={{ background: "" }}>
        <Slider {...settings}>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={exclusiveMobile1} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={exclusiveMobile2} alt="" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  );
};
export default LayananExclusive;
