import mustache from "../../js/mustache.js";

const serverUrl = "http://localhost:3000";
const newDressForm = document.getElementById("newDressForm");
const updateDressForm = document.getElementById("updateDressForm");


window.onload = () => {
    reloadDresses();
    newDressForm.onsubmit = addDress;
    newDressForm.elements.namedItem("fileUpload").onclick = uploadImage(1);
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
            else
                return Promise.reject();
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
        .catch(() => onError("Šaty sa nepodarilo načítať."));
}

function reloadDresses() {
    displayDresses(1);
    displayDresses(2);
}

function uploadImage(elm) {
    let files;
    if (elm === 1)
        files = newDressForm.elements.namedItem("fileElm").files;
    else
        files = updateDressForm.elements.namedItem("upfileElm").files;

    if (files.length > 0) {
        let images = new FormData();

        for(const file of files)
            images.append('images', file, file.name);

        const postRequest = {
            method: 'POST',
            body: images
        };
        console.log("ti");
        fetch(`${serverUrl}/api/imagesUpload`, postRequest)
            .then(response => {
                if (response.ok)
                    return response.json();
                else
                    return Promise.reject();
            })
            .then(responseJSON => {
                if (elm ===1)
                    newDressForm.elements.namedItem("photo").value = responseJSON.imageNames;
                else
                    updateDressForm.elements.namedItem("upphoto").value = responseJSON.imageNames;
            })
            .catch(() => onError("Nepodarilo sa nahrať fotky."));
    }
}

function addDress(event) {
    event.preventDefault();

    const name = newDressForm.elements.namedItem("name").value.trim();
    const size = newDressForm.elements.namedItem("size").value.trim();
    const color = newDressForm.elements.namedItem("color").value.trim();
    const description = newDressForm.elements.namedItem("description").value.trim();
    const price = newDressForm.elements.namedItem("price").value.trim();
    const category = newDressForm.elements.namedItem("category").value;
    const photo = newDressForm.elements.namedItem("photo").value;

    if (name === "" || category === "") {
        onError("Je nutné zadať potrebné údaje.");
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
            } else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}`));
        })
        .catch((error) => {
            console.log(error);
            onError("Šaty sa nepodarilo pridať.")});

    newDressForm.reset();
    $('#modalNewDress').modal('hide');
}

function deleteDress(dressId) {
    const deleteRequest = {
        method: 'DELETE'
    };

    const confirm = window.confirm("Naozaj chcete vymazať šaty s id " + dressId);
    if (!confirm)
        return;

    fetch(`${serverUrl}/api/dress/${dressId}`, deleteRequest)
        .then(response => {
            if (response.ok) {
                onSuccess("Šaty vymazané.");
                reloadDresses();
                return Promise.resolve();
            } else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}.`));
        })
        .catch(() => onError("Šaty sa nepodarilo vymazať."))
}

function displayUpdateDress(dressId) {
    fetch(`${serverUrl}/api/dress/${dressId}`)
        .then(response => {
            if(response.ok)
                return response.json();
            else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}.`));
        })
        .then(responseJSON => {
            document.getElementById("updateDress").innerHTML = mustache.render(
                document.getElementById("updateDress-template").innerHTML,
                responseJSON.dress
            );

            document.getElementById("upcategory").value = parseInt(responseJSON.dress.category);
            $('#modalUpdateDress').modal('show');
            updateDressForm.elements.namedItem("upfileUpload").onclick = uploadImage(2);
            document.getElementById("updateDressForm").onsubmit = updateDress;
        })
        .catch(() => this.onError("Šaty sa nepodarilo načítať."));
}

function updateDress(event) {
    event.preventDefault();

    const updateDressForm = document.getElementById("updateDressForm");

    const id = updateDressForm.elements.namedItem("upid").value.trim();
    const name = updateDressForm.elements.namedItem("upname").value.trim();
    const size = updateDressForm.elements.namedItem("upsize").value.trim();
    const color = updateDressForm.elements.namedItem("upcolor").value.trim();
    const description = updateDressForm.elements.namedItem("updescription").value.trim();
    const price = updateDressForm.elements.namedItem("upprice").value.trim();
    const category = updateDressForm.elements.namedItem("upcategory").value;
    const photo = "photo";

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
            } else
                return Promise.reject(new Error(`Server answered with ${response.status}: ${response.statusText}`));
        })
        .catch(() => onError("Nepodarilo sa upraviť šaty s id " + id));

    $('#modalUpdateDress').modal('hide');
}

function onSuccess(message) {
    document.getElementById("alertSuccessChild").innerText = message;
    document.getElementById("alertSuccess").style.visibility = "visible";
}

function onError(message) {
    document.getElementById("alertErrorChild").innerText = message;
    document.getElementById("alertError").style.visibility = "visible";
}