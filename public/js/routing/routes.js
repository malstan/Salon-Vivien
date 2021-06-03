
export default [
    {
        hash: "home",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = document.getElementById("template-home").innerHTML
    }
];