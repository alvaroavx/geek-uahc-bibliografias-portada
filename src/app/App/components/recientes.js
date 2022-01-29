import React from "react";
import { useTranslation } from "react-i18next";
import * as Constants from "./constants";

function Recientes() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="titulo_container">
        <div className="titulo_portada">{t("recientes.documentosRecientes")}</div>
      </div>
      <div className="documento_container">
        <iframe src={Constants.BASE_URL+"/udla/recientes.html"}
          width="100%"
          id="target-div"
          title="target-div"
          display="initial"
          position="relative"></iframe>
      </div>
      <div className="button_container">  
        <a href={Constants.BASE_URL+"/xmlui/recent-submissions"}>
          <div className="ver">{t("recientes.verMas")}</div>
        </a>
      </div>
    </div>
  );
}
export default Recientes;
