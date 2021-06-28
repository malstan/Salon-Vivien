# Salon-Vivien
Webpage for Salon-Vivien.

front-end:
o nas (default) - fotka pozadie na to text

svadobne saty
    -> karty v gride s fotkou, menom, popisom, pozicanie/predaj
    -> po kliknuti na fotku sa zobrazi modalne okno s fotkami

spolocenske saty
    -> karty v gride s fotkou, menom, popisom, pozicanie/predaj
    -> po kliknuti na fotku sa zobrazi modalne okno s fotkami

svadobne doplnky
    -> svadobne topanky - fotka do pozadia a text
    -> svadobne kabatiky - fotka do pozadia a text
    -> bizuteria - fotka do pozadia a text
    -> zavoje - fotka do pozadia a text
    -> panske doplnky - fotka do pozadia a text
    -> spolocenske kabelky - fotka do pozadia a text
    -> svadobne zupany - fotka do pozadia a text
    -> svadobne pohare - fotka do pozadia a text
    -> podvazky - fotka do pozadia a text

saty na 1. sv. prijimanie - fotka do pozadia a text

sluzby - priebeh cyklu
    rezervacia terminu
    skuska siat
    uprava siat
    platba
    vratenie

kontakt - kontaktne informacie a mapa

javascript router s mustache sablonami

back-end:
databaza - mysql
    tabulka -> dress (dress_id, name, size, color, description, price, photo, category, ordering)
    trigger -> pri vytvoreni zaznamu sa prida zaznam do stlpca ordering

REST API pomocou node.js
    -> /api/dress -> GET, POST
        -> getAll - vrati vsetky zaznamy z tabulky dress
        -> create - prida zaznam do tabulky dress
    -> /api/dress/:dressId -> GET, PUT, DELETE
        -> getById - vrati zaznam z tabulky dress
        -> update - upravi zaznam v tabulke dress
        -> delete - vymaze zaznam z tabulky dress
    -> /api/category/:category -> GET
    -> /api/category/:category?offset=''&limit='' -> GET
        -> getByCategory - vrati vsetky zaznamy z tabulky dress zo zadanej kategorie
    -> /api/imagesUpload -> POST
        -> upload - prida nazvy fotiek do databazy a fotky ulozi do suboru ./public/figures/uploads

PHP
    -> createDress.php -> POST
        -> prida zaznam do tabulky dress
        -> obsah tela - json objekt s datami (name, size, color, price, description, photo)
    -> deleteDress.php -> DELETE
        -> vymaze zaznam z tabulky dress
        -> atribut "id"
    -> getByCategory.php -> GET
        -> vrati zaznamy z tabulky dress, ak nie je specifikovany limit a offset tak vrati vsetky + pocet "total"
        -> atributy "category", "limit", "offset"
    -> getById.php -> GET
        -> vrati jeden zaznam z tabulky dress
        -> atribut "id"
    -> updateDress.php -> PUT
        -> upravi zaznam v tabulke dress
        -> atribut "id"
        -> obsah tela - json objekt s datami (name, size, color, price, description, photo)
    -> updateOrdering.php -> PUT
        -> upravi stlpec "ordering" v tabulke dress
        -> obsah tela - json objekt s datami (id, ordering)
    -> uploadImage -> POST
        -> ulozi obrazok na server a posle string s menami obrazkov
        -> obsah tela - subory