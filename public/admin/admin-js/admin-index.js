import mustache from "../../js/mustache.js";

const serverUrl = "http://localhost:3000";
const newDressForm = document.getElementById("newDressForm");

window.onload = () => {
    reloadDresses();
    newDressForm.onsubmit = addDress;
};

window.deleteDress = deleteDress;
window.displayUpdateDress = displayUpdateDress;
window.updateDress = updateDress;
window.uploadImage = uploadImage;

function displayDresses(category) {
    fetch(`${serverUrl}/api/category/${category}`)
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
        .then(dresses => {
            if (category === 1)
                document.getElementById("formal").innerHTML = mustache.render(
                    document.getElementById("dresses-template").innerHTML,
                    {data: dresses, category: "Spoločenské"}
                );
            else if (category === 2)
                document.getElementById("wedding").innerHTML = mustache.render(
                    document.getElementById("dresses-template").innerHTML,
                    {data: dresses, category: "Svadobné"}
                );
        })
        .catch(error => onError(error));
}

function reloadDresses() {
    displayDresses(1);
    displayDresses(2);
}

async function uploadImage(fileArray) {
    const files = fileArray;
    if (files.length > 0) {
        let images = new FormData();

        for(const file of files)
            images.append('images', file, file.name);

        const postRequest = {
            method: 'POST',
            body: images
        };

        let photoNames;
        await fetch(`${serverUrl}/api/imagesUpload`, postRequest)
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

async function addDress(event) {
    event.preventDefault();

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

    fetch(`${serverUrl}/api/dress`, postRequest)
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

function deleteDress(dressId) {
    const deleteRequest = {
        method: 'DELETE'
    };

    const confirm = window.confirm("Naozaj chcete vymazať šaty s id " + dressId + "?");
    if (!confirm)
        return;

    fetch(`${serverUrl}/api/dress/${dressId}`, deleteRequest)
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

function displayUpdateDress(dressId) {
    fetch(`${serverUrl}/api/dress/${dressId}`)
        .then(response => {
            if(response.ok)
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

async function updateDress(event) {
    event.preventDefault();

    const updateDressForm = document.getElementById("updateDressForm");

    const id = updateDressForm.elements.namedItem("upid").value.trim();
    const name = updateDressForm.elements.namedItem("upname").value.trim();
    const size = updateDressForm.elements.namedItem("upsize").value.trim();
    const color = updateDressForm.elements.namedItem("upcolor").value.trim();
    const description = updateDressForm.elements.namedItem("updescription").value.trim();
    const price = updateDressForm.elements.namedItem("upprice").value.trim();
    const category = updateDressForm.elements.namedItem("upcategory").value;

    const photos = await uploadImage(updateDressForm.elements.namedItem("upfileElm").files);
    let photo;
    if(photos)
        photo = updateDressForm.elements.namedItem("upphoto").value + "," + photos;
    else
        photo = updateDressForm.elements.namedItem("upphoto").value + ",";

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

    fetch(`${serverUrl}/api/dress/${id}`, putRequest)
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

function onSuccess(message) {
    document.getElementById("alertSuccessChild").innerText = message;
    document.getElementById("alertSuccess").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertSuccess").style.visibility = "hidden", 2000);
}

function onError(message) {
    document.getElementById("alertErrorChild").innerText = message;
    document.getElementById("alertError").style.visibility = "visible";
    setTimeout(() => document.getElementById("alertError").style.visibility = "hidden", 2000);
}