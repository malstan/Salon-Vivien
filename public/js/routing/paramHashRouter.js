/**
 * class for extract hash and route
 */
export default class ParamHashRouter {
    constructor(routes) {
        this.routes = routes;

        window.addEventListener("hashchange", event => this.doRouting(event));

        if (window.location.hash === "")
            window.location.hash = "#home";

        this.doRouting();
    }

    doRouting() {
        let hash = window.location.hash;

        if (hash) {
            hash = hash[0] === '#' ? hash.substr(1) : hash;
            let hashParts = hash.split("/");
            const matchingRoute = this.routes.find(route => route.hash === hashParts[0]);

            if (matchingRoute) {
                hashParts.shift();
                matchingRoute.getTemplate(matchingRoute.target, ...hashParts);
            }
        }
    }
}