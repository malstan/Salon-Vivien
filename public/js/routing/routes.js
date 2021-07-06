/**
 * Stanislav Malik
 * 2021
 * javascript router
 * fetching dresses
 */
import {home, dresses, contact, shoes, coats, veils, jewellery, gowns} from "../templates/templates.js";
import {errorDresses, preparing} from "../templates/templates-error.js";
import Mustache from "../mustache.js";

const serverUrl = `http://127.0.0.1/salon-vivien/server/php/dress`;

export default [
    {
        hash: "home",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = home(),
    },
    {
        hash: "dresses",
        target: "router-view",
        getTemplate: prepareForFetchDresses,
    },
    {
        hash: "shoes",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = shoes(),
    },
    {
        hash: "coats",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = coats(),
    },
    {
        hash: "jewellery",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = jewellery(),
    },
    {
        hash: "veils",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = veils(),
    },
    {
        hash: "gowns",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = gowns(),
    },
    {
        hash: "contact",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = contact(),
    },
    {
        hash: "preparing",
        target: "router-view",
        getTemplate: targetElm => document.getElementById(targetElm).innerHTML = preparing(),
    },
];

/**
 * set category and pagination before fetching dresses
 * @param targetElm - id of element where template will be displayed
 * @param category - category of dress
 * @param currentPage - pagination
 */
function prepareForFetchDresses(targetElm, category, currentPage) {
    // category - wedding
    if (category === "wedding") {
        if (!currentPage && !sessionStorage.pageW)
            sessionStorage.pageW = 1;
        else if (currentPage)
            sessionStorage.pageW = currentPage;
        fetchDresses(targetElm, 2, sessionStorage.pageW);
    }
    // category - formal
    else if (category === "formal") {
        if (!currentPage && !sessionStorage.pageF)
            sessionStorage.pageF = 1;
        else if (currentPage)
            sessionStorage.pageF = currentPage;
        fetchDresses(targetElm, 1, sessionStorage.pageF);
    }
}

/**
 * fetching dresses
 * @param targetElm - id of element where template will be displayed
 * @param category - category of dress
 * @param page - pagination
 */
function fetchDresses(targetElm, category, page) {
    let dressList = [];
    let total = 0;

    fetch(`${serverUrl}/getByCategory.php?category=${category}&limit=20&offset=${(page - 1) * 20}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                if (response.status === 404)
                    return Promise.reject(new Error("Šaty sa nenašli."));
                else
                    return Promise.reject(new Error("Niekde nastala chyba."));
            }
        })
        .then(responseJSON => {
            /* response -> dresses[
                                [id_dress, name, size, color, description, price, photo, category, ordering]
                            ],
                            total
            */
            dressList = responseJSON.dresses;
            dressList.map(dress => dress.price = parseFloat(dress.price).toFixed(2));

            total = Math.ceil(responseJSON.total / 20);
            return Promise.resolve();
        })
        .then(() => {
            renderDresses(targetElm, dressList, category, page, total);
        })
        .catch((error) => document.getElementById(targetElm).innerHTML = Mustache.render(errorDresses(), error))
}

/**
 * prepare data for rendering and render them to template with mustache.js
 * @param targetElm - id of element where template will be displayed
 * @param dressList - object with dresses
 * @param category - category of dress
 * @param current - current page
 * @param total - total pages
 */
function renderDresses(targetElm, dressList, category, current, total) {
    current = parseInt(current);

    // prepare dress object for rendering
    dressList.map((dress, index) => {
        if (dress.price > 0)
            dress.sale = true;
        dress.photo = dress.photo.split(",");
        dress.photo.pop();
        dress.color = dress.color.split(", ");
    });

    // set proper page as active
    let pages = Array.from({length: total}, (x, i) => ({page: i + 1, class: ""}));
    pages[current - 1].class = "active";

    const dataForRendering = {
        pages: pages,
        categorySK: "",
        categoryEN: "",
        dresses: dressList,
    };

    // set prev and next page
    if (current > 1)
        dataForRendering.prev = current - 1;
    if (current < total)
        dataForRendering.next = current + 1;

    // set category as text
    category === 1 ? dataForRendering.categorySK = "Spoločenské" : dataForRendering.categorySK = "Svadobné";
    category === 1 ? dataForRendering.categoryEN = "formal" : dataForRendering.categoryEN = "wedding";

    document.getElementById(targetElm).innerHTML = Mustache.render(dresses(), dataForRendering);
    window.scrollTo(0, 0);
}