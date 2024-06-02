import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";
import product1 from "../../Assets/product/product_1.png";
import product2 from "../../Assets/product/product_2.png";
import product3 from "../../Assets/product/product_3.png";

import productMobile1 from "../../Assets/product/product_1_v_mobile.png";
import productMobile2 from "../../Assets/product/product_2_v_mobile.png";
import productMobile3 from "../../Assets/product/product_3_v_mobile.png";

// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 1,
//     slidesToSlide: 1, // optional, default to 1.
//   },
// };

const ProductSlider = () => {
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
                <img src={product1} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={product2} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={product3} alt="" />
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
                <img src={productMobile1} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={productMobile2} alt="" />
              </a>
            </div>
          </div>
          <div className="top-slider">
            <div className="slider">
              <a href="https://web.whatsapp.com/send?phone=6281907194848&text=Halo%20Min%20IT,%20mau%20tanya-tanya%20dong">
                <img src={productMobile3} alt="" />
              </a>
            </div>
          </div>
        </Slider>
      </div>
 
    </React.Fragment>
  );
};
export default ProductSlider;
