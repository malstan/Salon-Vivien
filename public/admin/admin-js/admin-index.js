/**
 * Stanislav Malik
 * 2021
 * handling forms for CRUD operations
 */

import mustache from "../../js/mustache.js";
import Sortable from "./sortable.complete.esm.js";

const serverUrl = "http://127.0.0.1/salon-vivien/salon-vivien/server/dress";
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
window.processOrdering = processOrdering;

/**
 * display all dresses by category
 * @param category - dress category
 */
function displayDresses(category) {
    fetch(`${serverUrl}/getByCategory.php?category=${category}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                let message = "";
                if (response.status === 404)
                    message = `Šaty z kategórie ${category} sa nenašli.`;
                else if (response.status === 500)
                    message = `Nastala chyba pri vyberaní šiat kategórie ${category}.`;
                else
                    message = "Niekde nastala chyba...";

                return Promise.reject(message);
            }
        })
        .then(responseJSON => {
            document.getElementById(`category-${category}`).innerHTML = mustache.render(
                document.getElementById("dresses-template").innerHTML,
                {data: responseJSON.dresses, category: category}
            );
        })
        .catch(error => onError(error));

    return true;
}

/**
 * reload dresses
 */
function reloadDresses() {
    displayDresses(1);
    displayDresses(2);

    /* TODO - this can not be like this */
    setTimeout(() => {
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
    }, 1000);
}

/**
 * uploading file
 * @param fileArray
 * @returns {Promise<null|*>}
 */
async function uploadImage(fileArray) {
    const files = fileArray;
    if (files.length > 0) {
        let images = new FormData();

        for (const file of files)
            images.append('images[]', file, file.name);

        const postRequest = {
            method: 'POST',
            body: images
        };

        let photoNames;
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
    } else
        return null
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
    const price = newDressForm.elements.namedItem("price").value.trim();
    const category = newDressForm.elements.namedItem("category").value;
    const photo = await uploadImage(newDressForm.elements.namedItem("fileElm").files);

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

    fetch(`${serverUrl}/createDress.php`, postRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty pridané.")
                return Promise.resolve();
            } else {
                let message = "";
                if (response.status === 507)
                    message = `Šaty už existujú.`;
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .catch(error => onError(error));

    newDressForm.reset();
    $('#modalNewDress').modal('hide');
}

/**
 * delete dress by id
 * @param dressId - id of dress
 */
function deleteDress(dressId) {
    const deleteRequest = {
        method: 'DELETE'
    };

    const confirm = window.confirm("Naozaj chcete vymazať šaty s id " + dressId + "?");
    if (!confirm)
        return;

    fetch(`${serverUrl}/deleteDress.php?id=${dressId}`, deleteRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty vymazané.");
                return Promise.resolve();
            } else {
                let message = "";
                if (response.status === 404)
                    message = `Šaty s id ${dressId} sa nenašli.`;
                else if (response.status === 500)
                    message = `Nastala chyba pri vymazávaní šiat s id ${dressId}.`;
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .catch(error => onError(error))
}

/**
 * display form for dress update in modal
 * @param dressId - id of dress
 */
function displayUpdateDress(dressId) {
    fetch(`${serverUrl}/getById.php?id=${dressId}`)
        .then(response => {
            if (response.ok)
                return response.json();
            else {
                let message = "";
                if (response.status === 404)
                    message = `Šaty s id ${dressId} sa nenašli.`;
                else if (response.status === 500)
                    message = `Nastala chyba pri vyberaní šiat s id ${dressId}.`;
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .then(responseJSON => {
            document.getElementById("updateDress").innerHTML = mustache.render(
                document.getElementById("updateDress-template").innerHTML,
                responseJSON.dress
            );

            document.getElementById("upcategory").value = parseInt(responseJSON.dress.category);
            $('#modalUpdateDress').modal('show');
            document.getElementById("updateDressForm").onsubmit = updateDress;
        })
        .catch(error => onError(error));
}

/**
 * update dress
 * @param event
 * @returns {Promise<void>}
 */
async function updateDress(event) {
    event.preventDefault();

    const updateDressForm = document.getElementById("updateDressForm");

    // get variables
    const id = updateDressForm.elements.namedItem("upid").value.trim();
    const name = updateDressForm.elements.namedItem("upname").value.trim();
    const size = updateDressForm.elements.namedItem("upsize").value.trim();
    const color = updateDressForm.elements.namedItem("upcolor").value.trim();
    const description = updateDressForm.elements.namedItem("updescription").value.trim();
    const price = updateDressForm.elements.namedItem("upprice").value.trim();
    const category = updateDressForm.elements.namedItem("upcategory").value;

    const photos = await uploadImage(updateDressForm.elements.namedItem("upfileElm").files);
    let photo;

    /* TODO - check , */
    if (photos)
        photo = updateDressForm.elements.namedItem("upphoto").value + photos;
    else
        photo = updateDressForm.elements.namedItem("upphoto").value;

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

    const putRequest = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(updateDress),
    };

    fetch(`${serverUrl}/updateDress.php?id=${id}`, putRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty upravené.");
                return Promise.resolve();
            } else {
                let message = "";
                if (response.status === 404)
                    message = `Šaty s id ${id} sa nenašli.`;
                else if (response.status === 500)
                    message = `Nastala chyba pri upravovaní šiat s id ${id}.`;
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .catch(error => onError(error));

    $('#modalUpdateDress').modal('hide');
}

/**
 * show alert on success
 * @param message - success message
 */
function onSuccess(message) {
    document.getElementById("alertSuccessChild").innerText = message;
    document.getElementById("alertSuccess").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertSuccess").style.visibility = "hidden", 2000);
}

/**
 * show alert on error
 * @param message - error message
 */
function onError(message) {
    document.getElementById("alertErrorChild").innerText = message;
    document.getElementById("alertError").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertError").style.visibility = "hidden", 2000);
}

/**
 * pick only dresses with changed ordering and send request for update
 * @param category - dress category
 */
function processOrdering(category) {
    const list = createOrderedList(category);

    let newList = [];

    // get rid of unchanged dresses
    list.map((item, index) => {
        if (item.id !== weddingList[index].id)
            newList.push({id: item.id, order: index + 1})
    });

    if(list.length === 0){
        onError("Žiadna zmena na odoslanie.")
        return;
    }

    const putRequest = {
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'PUT',
        body: JSON.stringify(newList),
    };

    fetch(`${serverUrl}/updateOrdering.php`, putRequest)
        .then(response => {
            if (response.ok) {
                reloadDresses();
                onSuccess("Šaty usporiadané.");
                return Promise.resolve();
            } else {
                let message = "";
                if (response.status === 404)
                    message = `Šaty sa nenašli.`;
                else if (response.status === 500)
                    message = `Nastala chyba pri usporiadavaní šiat.`;
                else
                    message = "Niekde nastala chyba...";
                return Promise.reject(message);
            }
        })
        .catch(error => onError(error));
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
        list.push({id: item.id});
    });

    return list;
}