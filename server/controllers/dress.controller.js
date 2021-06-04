const Dress = require("../models/dress.model");

exports.getAll = (req, res) => {
    Dress.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message || "Some error occurred while retrieving dress."});
        else
            res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body)
        res.status(400).send({message: "Content can not be empty!"});

    const dress = new Dress({
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        description: req.body.description,
        sale: req.body.sale,
        photo: req.body.photo,
        category: req.body.category
    });

    Dress.create(dress, (err, data) => {
        if (err)
            res.status(500).send({message: err.message || "Some error occured while creating the Dress."});
        else
            res.send(data);
    });
};

exports.getByCategory = (req, res) => {
    Dress.getByCategory(req.params.category, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Not found Dresses with category id ${req.params.category}`});
            else
                res.status(500).send({message: `Error retrieving Dresses with category id ${req.params.category}`});
        } else
            res.send(data);
    });
};

exports.getById = (req, res) => {
    Dress.getById(req.params.dressId, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Not found Dress with id ${req.params.dressId}`});
            else
                res.status(500).send({message: `Error retrieving Dress with id ${req.params.dressId}`});
        } else
            res.send(data);
    });
};

exports.update = (req, res) => {
    if (!req.body)
        res.status(400).send({message: "Content can not be empty!"});

    Dress.update(req.params.dressId, new Dress(req.body), (err, data) => {
         if (err) {
             if (err.kind === "not_found")
                 res.status(404).send({ message: `Not found Dress with id ${req.params.dressId}` });
             else
                 res.status(500).send({ message: `Error updating Dress with id ${req.params.dressId}` });
         } else
             res.send(data);
    });
};

exports.delete = (req, res) => {
    Dress.delete(req.params.dressId, (err, data) => {
       if (err) {
           if (err.kind === "not_found")
               res.status(404).send({ message: `Not found Dress with id ${req.params.dressId}` });
           else res.status(500).send({ message: `Error deleting Dress with id ${req.params.dressId}` });
       } else
           res.send({ message: `Dress with id ${req.params.dressId} was deleted successfully.` });
    });
};