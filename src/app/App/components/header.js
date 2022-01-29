import React from "react";
import { useTranslation } from "react-i18next";
import handleClick from "./utils/links"
import logo from '../../../assets/images/logo-udla.svg';
import * as Constants from "./constants";

function myFunction() {
  var x = document.getElementById("sidebar-left");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function Header() {
  const { t } = useTranslation();
  return (
    <div
      id="navportada"
      role="navigation"
      className="navbar navbar-default navbar-static-top"
    >
      <div className="container">
        <div className="navbar-header">
          <button
            data-toggle="home"
            className="navbar-toggle"
            type="button"
            onClick={myFunction}
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <div id="brand">
            <div id="logo" className="transparent">
              <a className="navbar-brand" href={Constants.BASE_URL}>
                <img
                  src={logo}
                  alt="Logo Institucional"
                  className="logo"
                />
              </a>
            </div>
            <div id="title">
              {/*
              <div className="repositorio">{t("principal.repositorioDigital")}</div>
              <div className="banco">{t("principal.bancoCentralChile")}</div>
              */}
            </div>
          </div>
        </div>
        <div className="navbar-header pull-right hidden-xs" id="topbar">
          <ul id="menu-principal">
            <li><a href="https://miudla.udla.cl/users/sign_in">{t("principal.miudla")}</a></li>
            <li><a href="https://siae.udla.cl/">{t("principal.estudiantes")}</a></li>
            <li><a href="https://egresados.udla.cl/">{t("principal.egresados")}</a></li>
            <li><a href="https://pago-online.udla.cl/">{t("principal.pagos")}</a></li>
            <li><a href="https://bibliotecas.udla.cl/">{t("principal.biblioteca")}</a></li>
            <li><a href={Constants.BASE_URL+"/xmlui/ldap-login"}>{t("principal.ingresar")}</a></li>
            <li className="none"><button id="es" onClick={() => handleClick("es_ES")}><div className="flag es_ES"></div></button></li>
            <li className="none"><button id="en" onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
          </ul>
          <button
            type="button"
            className="navbar-toggle visible-sm"
            data-toggle="offcanvas"
          >
            <span className="sr-only">Cambiar navegaci&oacute;n</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        
      </div>
      <div id="sidebar-left">
        <ul id="menu-sidebar">
          <li><a href="https://miudla.udla.cl/users/sign_in">{t("principal.miudla")}</a></li>
          <li><a href="https://siae.udla.cl/">{t("principal.estudiantes")}</a></li>
          <li><a href="https://egresados.udla.cl/">{t("principal.egresados")}</a></li>
          <li><a href="https://pago-online.udla.cl/">{t("principal.pagos")}</a></li>
          <li><a href="https://bibliotecas.udla.cl/">{t("principal.biblioteca")}</a></li>
          <li><a href={Constants.BASE_URL+"/xmlui/ldap-login"}>{t("principal.ingresar")}</a></li>
          <li className="none"><button id="es" onClick={() => handleClick("es_ES")}><div className="flag es_ES"></div></button></li>
          <li className="none"><button id="en" onClick={() => handleClick("en")}><div className="flag en"></div></button></li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
