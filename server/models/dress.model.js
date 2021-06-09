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
        if (err)
            result(err, null);
        else
            result(null, {dresses: res});
    });
};

/* create new row in dress */
Dress.create = (dress, result) => {
    sql.query("SELECT count(*) AS dressesCount FROM dress WHERE name=?", dress.name, (err, res) => {
        if (err)
            result(err, null);
        else if (res[0].dressesCount !== 0)
            result({kind: "exists"}, null);
        else {
            sql.query("INSERT INTO dress SET ?", dress, (err, res) => {
                if (err)
                    result(err, null);
                else
                    result(null, {id: res.insertId, dress: dress});
            });
        }
    });
};

/* get rows by category from dress */
Dress.getByCategory = (params, result) => {
    if (!isNaN(params.limit) && !isNaN(params.offset)) {
        sql.query(`SELECT * FROM dress WHERE category=${params.category} LIMIT ${params.limit} OFFSET ${params.offset}`,
            (err, res) => {
                if (err)
                    result(err, null);
                else if (res.length === 0)
                    result({kind: "not_found"}, null);
                else
                    result(null, {dresses: res});
            });
    } else {
        sql.query("SELECT * FROM dress WHERE category=?", params.category, (err, res) => {
            if (err)
                result(err, null);
            else if (res.length === 0)
                result({kind: "not_found"}, null);
            else
                result(null, {dresses: res});
        });
    }
};

/* get one row by id from dress*/
Dress.getById = (dressId, result) => {
    sql.query("SELECT * FROM dress WHERE dress_id=?", dressId, (err, res) => {
        if (err)
            result(err, null);
        if (res.length === 1)
            result(null, {dress: res[0]});
        else
            result({kind: "not_found"}, null);
    });
};

/* update row by id from dress */
Dress.update = (dressId, dress, result) => {
    sql.query("UPDATE dress SET name=?, size=?, color=?, description=?, price=?, photo=?, category=? WHERE dress_id=?",
        [dress.name, dress.size, dress.color, dress.description, dress.price, dress.photo, dress.category, dressId],
        (err, res) => {
            if (err)
                result(err, null);
            if (res.affectedRows === 0)
                result({kind: "not_found"}, null);
            else
                result(null, {id: dressId, dress: dress});
        });
};

/* delete row by id from dress */
Dress.delete = (dressId, result) => {
    sql.query("DELETE FROM dress WHERE dress_id=?", dressId, (err, res) => {
        if (err)
            result(err, null);
        if (res.affectedRows === 0)
            result({kind: "not_found"}, null);
        else
            result(null, {message: `Dress with id ${dressId} removed.`});

    })
}

module.exports = Dress;