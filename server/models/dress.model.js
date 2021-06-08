/**
 * Dress definition
 * CRUD operations
 */

const sql = require("./db");

const Dress = function (dress) {
    this.name = dress.name;
    this.size = dress.size;
    this.color = dress.color;
    this.description = dress.description;
    this.price = dress.price;
    this.photo = dress.photo;
    this.category = dress.category;
};

/* get all rows from dress */
Dress.getAll = result => {
    sql.query("SELECT * FROM dress", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Dresses returned.")
        result(null, {dresses: res});
    });
};

/* create new row in dress */
Dress.create = (newDress, result) => {
    sql.query("SELECT count(*) AS dressesCount FROM dress WHERE name=?", newDress.name, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else if (res[0].dressesCount > 0) {
            console.log("Dress already exists.");
            result({kind: "exist"}, null);
            return;
        }

        sql.query("INSERT INTO dress SET ?", newDress, (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            console.log("Dress created.")
            result(null, {id: res.insertId, dress: newDress});
        });
    });
};

/* get rows by category from dress */
Dress.getByCategory = (category, result) => {
    sql.query(`SELECT * FROM dress WHERE category = ${category}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        result(null, {dresses: res});
    });
};

/* get one row by id from dress*/
Dress.getById = (dressId, result) => {
    sql.query(`SELECT * FROM dress WHERE dress_id = ${dressId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("Dress found.");
            result(null, {dress: res[0]});
            return;
        }

        console.log("Dress not found.");
        result({kind: "not_found"}, null);
    });
};

/* update row by id from dress */
Dress.update = (dressId, dress, result) => {
    sql.query("UPDATE dress SET name=?, size=?, color=?, description=?, price=?, photo=?, category=? WHERE dress_id=?",
        [dress.name, dress.size, dress.color, dress.description, dress.price, dress.photo, dress.category, dressId],
        (err, res) => {
            if (err) {
                console.log("error: ", err);
                result(null, err);
                return;
            }
            if (res.affectedRows === 0) {
                console.log("Dress with id not found.");
                result({kind: "not_found"}, null);
                return;
            }
            console.log("Dress updated.");
            result(null, {id: dressId, dress: dress});
        });
};

/* delete row by id from dress */
Dress.delete = (dressId, result) => {
    sql.query(`DELETE FROM dress WHERE dress_id=${dressId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        if (res.affectedRows === 0) {
            console.log("Dress with id not found.");
            result({kind: "not_found"}, null);
            return;
        }
        console.log("Dress removed.");
        result(null, {id: dressId, response: res});
    })
}

module.exports = Dress;