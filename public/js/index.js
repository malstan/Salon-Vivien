/**
 * Stanislav Malik
 * 2021
 * init
 */
import ParamHashRouter from "./routing/paramHashRouter.js";
import Routes from "./routing/routes.js";

window.router = new ParamHashRouter(Routes);

/* pages for categories - wedding, formal */
sessionStorage.pageW = 1;
sessionStorage.pageF = 1;