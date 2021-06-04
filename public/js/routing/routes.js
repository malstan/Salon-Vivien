import {home, weddingDress, socialDress, first, contact} from "../templates/templates.js";

export default [
    {
        hash: "home",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = home(),
    },
    {
        hash: "wedding",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = weddingDress(),
    },
    {
        hash: "social",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = socialDress(),
    },
    {
        hash: "first",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = first(),
    },
    {
        hash: "contact",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = contact(),
    },
];