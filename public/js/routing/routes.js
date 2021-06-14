import {home, dresses, contact} from "../templates/templates.js";
import {errorDresses} from "../templates/templates-error.js";
import Mustache from "../mustache.js";

export default [
    {
        hash: "home",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = home(),
    },
    {
        hash: "dresses",
        target: "router-view",
        getTemplate: prepareForFetchDresses,
    },
    {
        hash: "contact",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = contact(),
    },
];

function prepareForFetchDresses(targetElm, category, currentPage) {
    if (category === "wedding") {
        if (!currentPage && !sessionStorage.pageW)
            sessionStorage.pageW = 1;
        else if (currentPage)
            sessionStorage.pageW = currentPage;
        fetchDresses(targetElm, 2, sessionStorage.pageW);
    }
    else if (category === "formal") {
        if (!currentPage && !sessionStorage.pageF)
            sessionStorage.pageF = 1;
        else if (currentPage)
            sessionStorage.pageF = currentPage;
        fetchDresses(targetElm, 1, sessionStorage.pageF);
    }
}

function fetchDresses(targetElm, category, page) {
    const url = `http://localhost:3000/api/category/${category}?limit=20&offset=${(page - 1) * 20}`;
    let dressList = [];
    let total;

    fetch(url)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}.`))
        })
        .then(responseJSON => {
            dressList = responseJSON.dresses;
            total = Math.ceil(responseJSON.total / 20);
            if (total < 1)
                return Promise.reject(new Error("There are no dresses."));
            return Promise.resolve();
        })
        .then(() => {
            renderDresses(targetElm, dressList, category, page, total);
        })
        .catch((error) => {
            console.log(error);
            document.getElementById(targetElm).innerHTML = Mustache.render(errorDresses());
        });
}

function renderDresses(targetElm, dressList, category, current, total) {
    current = parseInt(current);

    dressList.map((value, index) => {
        if((index+1)%4 === 0)
            value.newRow = true;
    });

    let pages = Array.from({length: total}, (x, i) => ({page: i+1, class: ""}));
    pages[current-1].class = "active";

    const dataForRendering = {
        pages: pages,
        categorySK: "",
        categoryEN: "",
        dresses: dressList,
    };

    if (current > 1)
        dataForRendering.prev = current - 1;
    if (current < total)
        dataForRendering.next = current + 1;

    category === 1 ? dataForRendering.categorySK = "Spoločenské" : dataForRendering.categorySK = "Svadobné";
    category === 1 ? dataForRendering.categoryEN = "formal" : dataForRendering.categoryEN = "wedding";

    document.getElementById(targetElm).innerHTML =
        Mustache.render(dresses(), dataForRendering);
}