/**
 * Stanislav Malik
 * 2021
 * handling forms for CRUD operations
 * category 1 - formal dresses
 *          2 - wedding dresses
 */

import mustache from "../../public/js/mustache.js";
import Sortable from "./sortable.complete.esm.js";

const serverUrl = "http://127.0.0.1/salon-vivien/server/php/dress";
const newDressForm = document.getElementById("newDressForm");

reloadDresses();
newDressForm.onsubmit = addDress;

// variables for save actual ordering
let weddingList = [];
let formalList = [];

window.deleteDress = deleteDress;
window.displayUpdateDress = displayUpdateDress;
window.updateDress = updateDress;
window.uploadImage = uploadImage;
window.reloadDresses = reloadDresses;
window.prepareForUpdateOrdering = prepareForUpdateOrdering;

/**
 * display all dresses by category
 * @param category - dress category
 */
async function displayDresses(category) {
    // get dresses by category
    await fetch(`${serverUrl}/getByCategory.php?category=${category}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 404)
                    return Promise.reject(`Šaty z kategórie ${category} sa nenašli.`);
                else if (response.status === 500)
                    return Promise.reject(`Nastala chyba pri vyberaní šiat kategórie ${category}.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        .then(responseJSON => {
            let dresses = responseJSON.dresses;
            dresses.map(dress => dress.price = parseFloat(dress.price).toFixed(2));

            // display dresses
            document.getElementById(`category-${category}`).innerHTML = mustache.render(
                document.getElementById("dresses-template").innerHTML,
                {data: dresses, category: category}
            );
        })
        .catch(error => onError(error));
}

/**
 * reload dresses
 * create drag and drop
 *
 */
async function reloadDresses() {
    await displayDresses(1);
    await displayDresses(2);

    // create handling for drag and drop
    new Sortable.create(
        document.getElementById("js-draggable-list-2"),
        {
            handle: '.move',
            animation: 150,
        }
    );
    new Sortable.create(
        document.getElementById("js-draggable-list-1"),
        {
            handle: '.move',
            animation: 150,
        }
    );

    formalList = createOrderedList(1);
    weddingList = createOrderedList(2);
}

/**
 * uploading file
 * @param fileArray
 * @returns {Promise<null|*>}
 */
async function uploadImage(fileArray) {
    const files = fileArray;
    if (files.length === 0)
        return null;

    // get images
    let images = new FormData();

    for (const file of files)
        images.append('images[]', file, file.name);

    const postRequest = {
        method: 'POST',
        body: images
    };

    let photoNames;

    // send request to upload images
    await fetch(`${serverUrl}/uploadImage.php`, postRequest)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                let message = "";
                if (response.status === 400)
                    message = "Žiadne fotky sa nenašli.";
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .then(responseJSON => photoNames = responseJSON.imageNames)
        .catch(error => onError(error));
    return photoNames;
}

/**
 * add new dress
 * @param event
 * @returns {Promise<void>}
 */
async function addDress(event) {
    event.preventDefault();

    // get variables
    const name = newDressForm.elements.namedItem("name").value.trim();
    const size = newDressForm.elements.namedItem("size").value.trim();
    const color = newDressForm.elements.namedItem("color").value.trim();
    const description = newDressForm.elements.namedItem("description").value.trim();
    const price = newDressForm.elements.namedItem("price").value;
    const category = newDressForm.elements.namedItem("category").value;
    const photo = await uploadImage(newDressForm.elements.namedItem("fileElm").files);

    // check
    if (name === "" || category === "" || !photo) {
        document.getElementById("newDressForm-error").style.visibility = "visible";
        return;
    }

    const newDress = {
        name: name,
        size: size,
        color: color,
        description: description,
        price: price,
        category: category,
        photo: photo
    };

    const postRequest = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(newDress),
    };

    // create dress
    fetch(`${serverUrl}/createDress.php`, postRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty pridané.")
                return Promise.resolve();
            } else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 507)
                    return Promise.reject(`Šaty už existujú.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        .catch(error => onError(error));

    newDressForm.reset();

    // hide modal with form to create dress
    $('#modalNewDress').modal('hide');
}

/**
 * delete dress by id
 * @param dressId - id of dress
 */
function deleteDress(dressId, category) {
    // prepare array of data to update ordering
    let list = createOrderedList(category);
    const indexToDel = list.indexOf(dressId.toString());

    const toUpdate = [];
    list.map((item, index) => {
        if (index > indexToDel)
            toUpdate.push({id: item, order: index})
    });

    // check
    if (!window.confirm("Naozaj chcete vymazať šaty s id " + dressId + "?"))
        return;

    const deleteRequest = {
        method: 'DELETE'
    };

    // delete dress
    fetch(`${serverUrl}/deleteDress.php?id=${dressId}`, deleteRequest)
        .then(async response => {
            if (response.ok) {
                await reloadDresses();
                onSuccess("Šaty vymazané.");
                return Promise.resolve();
            } else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 404)
                    return Promise.reject(`Šaty s id ${dressId} sa nenašli.`);
                else if (response.status === 500)
                    return Promise.reject(`Nastala chyba pri vymazávaní šiat s id ${dressId}.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        // update ordering
        .then(() => processOrdering(toUpdate))
        .catch(error => onError(error));
}

/**
 * display form for dress update in modal
 * @param dressId - id of dress
 */
function displayUpdateDress(dressId) {

    let dress = [];
    // get one dress by id
    fetch(`${serverUrl}/getById.php?id=${dressId}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 404)
                    return Promise.reject(`Šaty s id ${dressId} sa nenašli.`);
                else if (response.status === 500)
                    return Promise.reject(`Nastala chyba pri vyberaní šiat s id ${dressId}.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        .then(responseJSON => {
            dress = responseJSON.dress;

            // fill form with data
            document.getElementById("updateDress").innerHTML = mustache.render(
                document.getElementById("updateDress-template").innerHTML,
                dress
            );

            // fill category in form
            document.getElementById("upcategory").value = parseInt(dress.category);

            // show modal with form for update dress
            const modal = new bootstrap.Modal(document.querySelector("#modalUpdateDress"));
            modal.show();

            document.getElementById("updateDressForm").addEventListener("submit", event => updateDress(event, dress));
        })
        .catch(error => onError(error));
}

/**
 * update dress
 * @param event
 * @param dress
 * @returns {Promise<void>}
 */
async function updateDress(event, dress) {
    event.preventDefault();

    const updateDressForm = document.getElementById("updateDressForm");

    // get variables
    const id = updateDressForm.elements.namedItem("upid").value.trim();
    const name = updateDressForm.elements.namedItem("upname").value.trim();
    const size = updateDressForm.elements.namedItem("upsize").value.trim();
    const color = updateDressForm.elements.namedItem("upcolor").value.trim();
    const description = updateDressForm.elements.namedItem("updescription").value.trim();
    const price = updateDressForm.elements.namedItem("upprice").value;
    const category = updateDressForm.elements.namedItem("upcategory").value;

    // upload images
    // response is names of images
    const photos = await uploadImage(updateDressForm.elements.namedItem("upfileElm").files);
    let photo;

    if (photos)
        photo = updateDressForm.elements.namedItem("upphoto").value + photos;
    else
        photo = updateDressForm.elements.namedItem("upphoto").value;

    // check
    if (name === "" || category === "") {
        onError("Je nutné zadať potrebné údaje.");
        return;
    }

    const updateDress = {
        name: name,
        size: size,
        color: color,
        description: description,
        price: price,
        category: category,
        photo: photo
    };

    // check if data has been changed
    delete dress.id_dress;
    delete dress.ordering;

    if (_.isEqual(dress, updateDress)) {
        onError("Nie je čo zmeniť.");
        return;
    }

    const putRequest = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(updateDress),
    };

    // update dress
    fetch(`${serverUrl}/updateDress.php?id=${id}`, putRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty upravené.");
                return Promise.resolve();
            } else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 404)
                    return Promise.reject(`Šaty s id ${id} sa nenašli.`);
                else if (response.status === 500)
                    return Promise.reject(`Nastala chyba pri upravovaní šiat s id ${id}.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        .catch(error => onError(error));
    // hide modal with form
    $('#modalUpdateDress').modal('hide');
}

/**
 * show alert on success
 * @param message - success message
 */
function onSuccess(message) {
    document.getElementById("alertSuccessChild").innerText = message;
    document.getElementById("alertSuccess").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertSuccess").style.visibility = "hidden", 3000);
}

/**
 * show alert on error
 * @param message - error message
 */
function onError(message) {
    document.getElementById("alertErrorChild").innerText = message;
    document.getElementById("alertError").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertError").style.visibility = "hidden", 3000);
}

/**
 * pick only dresses with changed ordering and send request for update
 * @param toUpdate - array of data for update
 */
function processOrdering(toUpdate) {
    // check
    if (toUpdate.length === 0) {
        onError("Žiadna zmena na odoslanie.");
        return;
    }

    const putRequest = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(toUpdate),
    };

    // update ordering
    fetch(`${serverUrl}/updateOrdering.php`, putRequest)
        .then(async response => {
            if (response.ok) {
                await reloadDresses();
                onSuccess("Šaty usporiadané.");
                return Promise.resolve();
            } else {
                if (response.status === 400)
                    return Promise.reject("Obsah požiadavky nie je správny.");
                else if (response.status === 404)
                    return Promise.reject(`Šaty sa nenašli.`);
                else if (response.status === 500)
                    return Promise.reject(`Nastala chyba pri usporiadavaní šiat.`);
                else
                    return Promise.reject("Niekde nastala chyba...");
            }
        })
        .catch(error => onError(error));
}

/**
 * prepare list of data for update
 * @param category - dress category
 */
function prepareForUpdateOrdering(category) {
    const newList = createOrderedList(category);
    let oldList
    category === 1 ? oldList = formalList : oldList = weddingList;

    let toUpdate = [];

    // get rid of unchanged dresses
    newList.map((item, index) => {
        if (item !== oldList[index])
            toUpdate.push({id: item, order: index + 1})
    });

    processOrdering(toUpdate);
}

/**
 *
 * @param category - dress category
 * @returns {*[]} - array of dresses [{id}]
 */
function createOrderedList(category) {
    const rawList = document.querySelectorAll(`.js-draggable-${category}`);
    let list = [];

    rawList.forEach(item => {
        list.push(item.id);
    });

    return list;
}