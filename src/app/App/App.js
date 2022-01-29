import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import "../../assets/css/opengeek.css";
import "../../assets/css/responsive.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Recientes from "./components/recientes";
import Buscador from "./components/buscador";
//import Banner from "./components/banner";
import Collections from "./components/collections";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      {/* <!-- BANNER --> */}
      <div id="banner">
        <div id="back-image">
        </div>
        {/*<div id="slider" className="">
          <div className="container">
            <Banner />
          </div>
        </div>*/}
      </div>

      {/* <!-- TITULO --> */}
      <div id="titulo-principal">
        <div className="titulo">{
          t("banner.titulo")}
          </div>
      </div>

      {/* <!-- BUSCADOR --> */}
      <div className="trail-wrapper">
        <div className="container">
          <Buscador />
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="container">
        <div id="midblock">

          {/* COLLECTIONS */}
          <div id="midcontent">
            <Collections />

            {/* RECIENTES */}
            <div id="recientes">
              <Recientes />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
          <Footer />
      </footer>
    </div>
  );
}

export default App;
