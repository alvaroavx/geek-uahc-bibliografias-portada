import React from "react";
import { useTranslation } from "react-i18next";
import * as Constants from "./constants";

function Buscador() {
  const { t } = useTranslation();
  return (
    <div id="buscador">
      <div className="form_container">
        <form
          method="post"
          className=""
          id="ds-search-form"
          action={Constants.BASE_URL+"/xmlui/discover"}
        >
          <fieldset>
            <div className="input-group">
              <input
                placeholder={t("buscador.buscar")}
                type="text"
                className="ds-text-field form-control"
                id="searcher"
                name="query"
              />
              <span className="input-group-btn">
                <button title="Ir" className="ds-button-field btn btn-primary" id="btnsearcher">
                  <i className="fas fa-search"></i>
                </button>
              </span>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Buscador;
