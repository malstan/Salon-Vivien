<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" rel="stylesheet">
    <link href="admin-css/admin-style.css" media="screen" rel="stylesheet">
</head>
<body>
<?php
session_start();
if (!isset($_SESSION['auth']))
    header("location: login.php");

if (time() - $_SESSION['time-stamp'] > 60 * 60) {
    session_unset();
    session_destroy();
    header("location: login.php");
}
?>
<!-- HEADER -->
<header>
    <nav class="navbar navbar-light bg-light px-4">
        <h2><a href="/">Salón-Vivien - admin</a></h2>
        <a class="btn myButton" href="admin-php/logout.php">Odhlásiť sa</a>
    </nav>
</header>
<!-- CONTENT -->
<main>
    <div class="container-fluid py-5">
        <!-- new dress -->
        <button class="btn myButton mb-4" data-bs-target="#modalNewDress" data-bs-toggle="modal" type="button">
            Nové šaty
        </button>
        <!-- modal -->
        <div class="modal fade" id="modalNewDress" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content text-center">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nové šaty</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- form for new dress -->
                        <form id="newDressForm" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="name">Meno</label>
                                <input aria-describedby="meno" class="form-control" id="name" required type="text">
                            </div>
                            <div class="form-group">
                                <label for="size">Veľkosť</label>
                                <input class="form-control" id="size" type="text">
                            </div>
                            <div class="form-group">
                                <label for="color">Farba</label>
                                <input class="form-control" id="color" required type="text">
                            </div>
                            <div class="form-group">
                                <label for="description">Popis</label>
                                <input class="form-control" id="description" type="text">
                            </div>
                            <div class="form-group">
                                <label for="price">Cena</label>
                                <input class="form-control" id="price" step="any" type="number" value="0">
                            </div>
                            <div class="form-group">
                                <label for="category">Kategória</label>
                                <select class="form-control" id="category" required>
                                    <option value="none" selected disabled hidden></option>
                                    <option value="1">Spoločenské</option>
                                    <option value="2">Svadobné</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="fileElm">Fotky</label>
                                <fieldset id="fieldFileUpload">
                                    <input accept="image/jpeg, image/png, image/jpg" id="fileElm" multiple
                                           name="files[]" type="file"/>
                                </fieldset>
                            </div>
                            <button class="btn myButton" type="submit">Pridať</button>
                        </form>
                        <div class="alert alert-danger" id="newDressForm-error">
                            Zadajte potrebné údaje.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- DRESSES -->
        <button type="button" class="collapsible-btn bg-light">Svadobné šaty</button>
        <div class="content-colaps">
            <div class="mt-3 justify-content-end">
                <button class="myButton btn" onclick="reloadDresses()">Zrušiť</button>
                <button class="myButton btn" onclick="processOrdering(2)">Uložiť</button>
            </div>
            <div id="category-2" class="table-responsive"></div>
        </div>

        <button type="button" class="collapsible-btn bg-light">Spoločenské šaty</button>
        <div class="content-colaps">
            <div class="mt-3 justify-content-end">
                <button class="myButton btn" onclick="reloadDresses()">Zrušiť</button>
                <button class="myButton btn" onclick="processOrdering(1)">Uložiť</button>
            </div>
            <div id="category-1" class="table-responsive"></div>
        </div>
    </div>
</main>
<!-- modal for dress update -->
<div id="updateDress"></div>

<!-- alerts -->
<div class="alert alert-danger fade show" id="alertError" role="alert">
    <strong>Uh Oh!</strong>
    <span id="alertErrorChild">Niekde nastala chyba.</span>
</div>
<div class="alert alert-success fade show" id="alertSuccess" role="alert">
    <strong>Všetko v poriadku!</strong>
    <span id="alertSuccessChild">You should check in on some of those fields below.</span>
</div>

<!-- template for table of dresses -->
<script id="dresses-template" type="text/template">

    <table class="table table-striped">
        <thead>
        <tr>
            <th scope="col">Presunť</th>
            <th scope="col">#</th>
            <th scope="col">Meno</th>
            <th scope="col">Farba</th>
            <th scope="col">Cena</th>
            <th scope="col">Veľkosť</th>
            <th scope="col">Popis</th>
            <th scope="col">Zmazať</th>
            <th scope="col">Upraviť</th>
        </tr>
        </thead>
        <tbody id="js-draggable-list-{{category}}">
        {{#data}}
        <tr id="{{id_dress}}" class="js-draggable-{{category}}">
            <td class="move"><i class="fas fa-arrows-alt-v"></i></td>
            <th scope="row">{{ordering}}</th>
            <td>{{name}}</td>
            <td>{{color}}</td>
            <td>{{price}}</td>
            <td>{{size}}</td>
            <td>{{description}}</td>
            <td><i class="fas fa-trash-alt" style="color: red; cursor: pointer" onclick="deleteDress({{id_dress}})"></i>
            </td>
            <td><i class="fas fa-edit" style="color: skyblue; cursor: pointer"
                   onclick="displayUpdateDress({{id_dress}})"></i>
            </td>
        </tr>
        {{/data}}
        </tbody>
    </table>

</script>

<script id="updateDress-template" type="text/template">
    <!-- Modal -->
    <div class="modal fade" id="modalUpdateDress" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content text-center">
                <div class="modal-header">
                    <h5 class="modal-title">Upraviť šaty</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- form for dress update -->
                    <form id="updateDressForm">
                        <div class="form-group">
                            <label for="upid">Id</label>
                            <input type="text" class="form-control" id="upid" aria-describedby="meno"
                                   value="{{id_dress}}" required
                                   disabled>
                        </div>
                        <div class="form-group">
                            <label for="upname">Meno</label>
                            <input type="text" class="form-control" id="upname" aria-describedby="meno" value="{{name}}"
                                   required>
                        </div>
                        <div class="form-group">
                            <label for="upsize">Veľkosť</label>
                            <input type="text" class="form-control" id="upsize" value="{{size}}">
                        </div>
                        <div class="form-group">
                            <label for="upcolor">Farba</label>
                            <input type="text" class="form-control" id="upcolor" value="{{color}}" required>
                        </div>
                        <div class="form-group">
                            <label for="updescription">Popis</label>
                            <input type="text" class="form-control" id="updescription" value="{{description}}">
                        </div>
                        <div class="form-group">
                            <label for="upprice">Cena</label>
                            <input type="number" step="any" class="form-control" id="upprice" value="{{price}}">
                        </div>
                        <div class="form-group">
                            <label for="upcategory">Kategória</label>
                            <select class="form-control" id="upcategory" required>
                                <option value="1">Spoločenské</option>
                                <option value="2">Svadobné</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="upphoto">Fotky</label>
                            <input class="form-control" type="text" id="upphoto" value="{{photo}}" disabled required>
                            <br>
                            <fieldset>
                                <input type="file" multiple id="upfileElm" accept="image/jpeg, image/png, image/jpg"/>
                            </fieldset>
                        </div>
                        <button type="submit" class="btn myButton">Upraviť</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</script>

<script>
    const collapse = document.querySelectorAll(".collapsible-btn");

    for (let elm of collapse) {
        elm.addEventListener("click", () => {
            elm.classList.toggle("active-colaps");
            const content = elm.nextElementSibling;
            content.style.display === "block" ? content.style.display = "none" : content.style.display = "block";
            content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px";
        });
    }
</script>

<script src="admin-js/admin-index.js" type="module"></script>

<script src="https://raw.githack.com/SortableJS/Sortable/master/Sortable.js"></script>
<script crossorigin="anonymous"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
        integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js"
        integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT"
        crossorigin="anonymous"></script>
</body>
</html>