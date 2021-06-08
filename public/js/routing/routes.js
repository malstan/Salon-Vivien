import {home, dresses, singleDress, contact, errorDisplay} from "../templates/templates.js";
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
        getTemplate: renderDresses,
    },
    {
        hash: "dress",
        target: "router-view",
        getTemplate: renderDress,
    },
    {
        hash: "contact",
        target: "router-view",
        getTemplate: (targetElm) => document.getElementById(targetElm).innerHTML = contact(),
    },
];

function renderDresses(targetElm, category) {
    if (category === "wedding")
        fetchDresses(targetElm, 2);
    else if (category === "formal")
        fetchDresses(targetElm, 1);
}

function fetchDresses(targetElm, category) {
    const url = `http://localhost:3000/api/category/${category}`;
    let dressList = [];

    fetch(url)
        .then(response => {
            if (response.ok)
                return response.json();
            else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}.`))
        })
        .then(responseJSON => {
            dressList = responseJSON;
            return Promise.resolve();
        })
        .then(() => {
            dressList.dresses.map((value, index) => {
                if((index+1)%4 === 0)
                    value.newRow = true;
            });
            const data = {
                dresses: dressList,
                category: "",
            };
            if (category === 1) data.category = "Spoločenské";
            else data.category = "Svadobné";

            document.getElementById(targetElm).innerHTML =
                Mustache.render(dresses(), data);
        })
        .catch(error => {
            const errorMessage = {error: error};
            document.getElementById(targetElm).innerHTML = Mustache.render(errorDisplay(), errorMessage);
        });
}

function renderDress(targetElm, id) {
    const url = `http://localhost:3000/api/dress/${id}`;

    let dress;

    fetch(url)
        .then((response) => {
            if(response.ok)
                return response.json();
            else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}.`));
        })
        .then((responseJSON) => {
            dress = responseJSON.dress;
            return Promise.resolve();
        })
        .then(() => {
            if (dress.category === 1) dress.category = "formal";
            else dress.category = "wedding";

            document.getElementById(targetElm).innerHTML =
                Mustache.render(singleDress(), dress);
        })
        .catch(error => {
            const errorMessage = {error: error};
            document.getElementById(targetElm).innerHTML = Mustache.render(errorDisplay(), errorMessage);
        });
}