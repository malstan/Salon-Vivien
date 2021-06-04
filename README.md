# Salon-Vivien
Webpage for Salon-Vivien.

front-end:
o nas (default) - fotka pozadie na to text

svadobne saty - fotky (mozno strankovanie) (oznacenie pozicanie/predaj)
    -> dalsie fotky a popis

spolocenske saty - fotky (mozno strankovanie) (oznacenie pozicanie/predaj)
    -> dalsie fotky a popis

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
    tabulka -> dress (dress_id, name, size, color, description, sale, photo, category)
            -> category (category_id, category)

REST API pomocou node.js
    -> /api/dress -> GET, POST
        -> getAll - vrati vsetky zaznamy z tabulky dress
        -> create - prida zaznam do tabulky dress
    -> /api/dress/:dressId -> GET, PUT, DELETE
        -> getById - vrati zaznam z tabulky dress
        -> update - upravi zaznam v tabulke dress
        -> delete - vymaze zaznam z tabulky dress
    -> /api/category/:category -> GET
        -> getByCategory - vrati vsetky zaznamy z tabulky dress zo zadanej kategorie