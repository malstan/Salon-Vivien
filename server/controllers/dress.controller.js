const Dress = require("../models/dress.model");

exports.findAll = (req, res) => {
    Dress.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving dress."
            });
        else
            res.send(data);
    });
};