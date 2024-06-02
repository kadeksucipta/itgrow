import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import ProductSlider from "../Components/ProductSlider/ProductSlider";
import Layanan from "../Components/Layanan/Layanan";
import LayananExclusive from "../Components/LayananExclusie/LayananExclusive";
import Footer from "../Components/Footer/Footer";
import BottomBar from "../Components/BottomBar/BottomBar";
import tools from "../Assets/tek.png";
import cta from "../Assets/cta.png";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-home">
        <h2 className="title-home">
          Jasa Desain Grafis & Web Development - Gratis Desain
        </h2>
        <div className="fitur-search">
          <input
            className="search-bar"
            type="text"
            placeholder="cari layanan..."
          />
        </div>
        <ProductSlider />
        <Layanan />
        <LayananExclusive />
        <h2 className="text-tools">Teknology yang kami gunakan</h2>
        <div className="parent-tek">
          <img className="img-tools" src={tools} alt="" />
        </div>
      </div>
      <BottomBar />
      <Footer />
      <div className="parent-cta">
        <a href="">
          <div className="child-cta">
            <img className="cta-wa" src={cta} alt="" />
          </div>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Home;
