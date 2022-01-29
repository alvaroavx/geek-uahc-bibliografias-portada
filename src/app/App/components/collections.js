import React from "react";
import { useTranslation } from "react-i18next";
import * as Constants from "./constants";

function Collections() {
  const { t } = useTranslation();
  return (
    <div id="colecciones">
      {/*<div>
        <div className="titulo">{t("colecciones.titulo")}</div>
      </div>*/}
      <div className="coleccion_carrousel">
      <div>
          <div className="titulo_container">
            <div className="titulo_portada">{t("colecciones.colecciones")}</div>
          </div>
          <div className="facultades1">
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/5"}>
              <div className="coleccion derecho">
                <div className="nombre">{t("colecciones.facultad_derecho")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/9"}>
              <div className="coleccion saludsociales">
                <div className="nombre">{t("colecciones.facultad_saludsociales")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/3"}>
              <div className="coleccion arquitectura">
                <div className="nombre">{t("colecciones.facultad_arquitectura")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/6"}>
              <div className="coleccion educacion">
                <div className="nombre">{t("colecciones.facultad_educacion")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/7"}>
              <div className="coleccion negocios">
                <div className="nombre">{t("colecciones.facultad_negocios")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/4"}>
              <div className="coleccion artes">
                <div className="nombre">{t("colecciones.facultad_artes")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/8"}>
              <div className="coleccion veterinaria">
                <div className="nombre">{t("colecciones.facultad_veterinaria")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/10"}>
              <div className="coleccion ciencias">
                <div className="nombre">{t("colecciones.instituto_ciencias")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/11"}>
              <div className="coleccion ingles">
                <div className="nombre">{t("colecciones.instituto_ingles")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/12"}>
              <div className="coleccion matematicas">
                <div className="nombre">{t("colecciones.instituto_matematicas")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/13"}>
              <div className="coleccion deporte">
                <div className="nombre">{t("colecciones.instituto_deporte")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/14"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_academica")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/15"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_investigacion")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/16"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_finanzas")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/17"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_calidad")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/18"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_admision")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/19"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_operaciones")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/20"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_prorrectoria")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/21"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_secretaria")}</div>
              </div>
            </a>
            <a href={Constants.BASE_URL+"/xmlui/handle/udla/22"}>
              <div className="coleccion otros">
                <div className="nombre">{t("colecciones.otros_rectoria")}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
