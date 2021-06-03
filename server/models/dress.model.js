const sql = require("./db");

const Dress = function (dress) {
    this.name = dress.name;
    this.size = dress.size;
    this.description = dress.description;
    this.sale = dress.sale;
    this.photo = dress.photo;
    this.category = dress.category;
};

Dress.getAll = result => {
    sql.query("SELECT * FROM dress", (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null, err);
            return;
        }
        result(null, res);
    });
};

module.exports = Dress;