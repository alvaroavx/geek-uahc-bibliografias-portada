import i18next from "i18next";

const handleClick = function(lang) {
    i18next.changeLanguage(lang);
    var language = "locale-attribute="+lang;
    console.log("inicio",lang);
    var separator = "?";
    var backup = "";
    /* Se modifica el formulario de busqueda */
    var searcher = document.getElementById("ds-search-form");
    backup = searcher.getAttribute("action").split("?")[0];
    searcher.removeAttribute("action");
    searcher.setAttribute("action", backup+separator+language);
    /* Se cambian todos los enlaces añadiendo el idioma seleccionado */
    var links = document.getElementsByTagName('a');
    var linksList = Array.prototype.slice.call(links);
    linksList.forEach(function ShowResults(value, index, ar) {
        if(value.getAttribute("href").includes("?")){
            console.log(value.getAttribute("href"));
            let url = new URL(value.getAttribute("href"));
            if(url.search.slice(1) !== 'null' || url.search.slice(1) !== undefined) {
                let params = new URLSearchParams(url.search.slice(1));
                if(params.has("locale-attribute")) {
                    console.log(value.getAttribute("href")) ;
                    params.set("locale-attribute", lang)
                    backup = value.getAttribute("href").split("?")[0];
                    value.setAttribute("href", backup+"?"+params.toString());
                }
                else {
                    value.setAttribute("href", value.getAttribute("href")+"&"+language);
                }
            }
        }
        else {
            backup = value.getAttribute("href").split("?")[0];
            value.removeAttribute("href");
            value.setAttribute("href", backup+separator+language);
        }
/*
        backup = value.getAttribute("href").split("?")[0];
        value.removeAttribute("href");
        if(backup.includes("?"))
            separator = "&";
        value.setAttribute("href", backup+separator+language);*/
    });
    
}

export default handleClick;