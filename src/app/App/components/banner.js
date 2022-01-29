import React from "react";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <div id="articulos">
      <div className="articulo destacado">
        <div className="informacion">
          <div className="titulo">
              {t("banner.titulo")}
          </div>
          <div className="bajada only-desktop">
            {t("banner.parrafo1")}
          </div>
          {/* <!--<div className="ver" onClick="GoTo('/xmlui/handle/20.500.12580/10')">Ver más</div>--> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
