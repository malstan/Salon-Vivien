import ParamHashRouter from "./routing/paramHashRouter.js";
import Routes from "./routing/routes.js";

window.router = new ParamHashRouter(Routes, "home");

sessionStorage.pageW = 1;
sessionStorage.pageF = 1;