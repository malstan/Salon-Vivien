import ParamHashRouter from "./routing/paramHashRouter.js";
import Routes from "./routing/routes.js"

window.router = new ParamHashRouter(Routes, "home");