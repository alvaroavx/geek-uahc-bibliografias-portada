import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from '../../../assets/images/logo-udla.svg';
import acreditada from '../../../assets/images/acreditada.svg';
import qstars from '../../../assets/images/qstars.jpg';
import * as Constants from "./constants";

function Footer() {
  const { t } = useTranslation();
    return (
      <Router>
        <div className="row">
          <div className="widget_text container">
            <div className="textwidget custom-html-widget">
              <div className="center-footer">
                
              </div>
              <div className="bottom-footer">
                <div className="wrapper">
                  <a href="https://www.udla.cl/"><img src={logo} alt=""/></a>
                  <a href="https://www.udla.cl/"><img src={qstars} alt=""/></a>
                  <a href="https://www.udla.cl/"><img src={acreditada} alt=""/></a>
                </div>
                <div className="rights">
                  <h6>Derechos reservados Universidad de Las Américas | <a href={Constants.BASE_URL+"/xmlui/password-login"}>{t("principal.ingresar-admin")} <i className="fas fa-external-link-alt"></i></a></h6>
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="right">
            <div className="info">
              <div id="opengeek">
                <span className="theme-by">Implementado por</span>
                <a
                  href="https://opengeekservice.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="OpenGeek"
                >
                </a>
              </div>
            </div>
          </div>
      </Router>
    );
};

export default Footer;
