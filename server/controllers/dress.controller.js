/**
 * controller for CRUD operations
 */

const Dress = require("../models/dress.model");

// GET - all dresses
exports.getAll = (req, res) => {
    Dress.getAll((err, data) => {
        if (err)
            res.status(500).send({message: err.message || "Some error occurred while retrieving dress."});
        else {
            data.dresses.map((dress) => dress.photo = dress.photo.split(","));
            data.dresses.map((dress) => dress.photo.pop());
            res.send(data);
        }
    });
};

// POST - new dress
exports.create = (req, res) => {
    if (!req.body || !req.body.name || !req.body.color || !req.body.photo || !req.body.category || isNaN(req.body.category)) {
        res.status(400).send({message: "Content must be have specific structure!"});
        return;
    }
    const dress = new Dress({
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo,
        category: req.body.category
    });

    Dress.create(dress, (err, data) => {
        if (err)
            if (err.kind === "exists")
                res.status(507).send({message: `Dress with name ${req.body.name} already exists in database.`})
            else
                res.status(500).send({message: err.message || "Some error occured while creating the Dress."});
        else {
            data.dress.photo = data.dress.photo.split(",");
            data.dress.photo.pop();
            res.send(data);
        }
    });
};

// GET - by category
exports.getByCategory = (req, res) => {
    const parameters = {category: req.params.category};
    if (!parameters.category || isNaN(parameters.category)) {
        res.status(400).send({message: "Parameter must be number!"});
        return;
    }

    req.query.limit ? parameters.limit = req.query.limit : parameters.limit = 20;
    req.query.offset ? parameters.offset = req.query.offset : parameters.offset = 0;

    Dress.getByCategory(parameters, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Dresses with category id ${parameters.category} not found.`});
            else
                res.status(500).send({message: `Error retrieving Dresses with category id ${parameters.category}.`});
        } else {
            data.dresses.map((dress) => {
                dress.photo = dress.photo.split(",");
                dress.color = dress.color.split(", ");
            });
            data.dresses.map((dress) => dress.photo.pop());
            res.send(data);
        }
    });
};

// GET - by id
exports.getById = (req, res) => {
    const dressId = req.params.dressId;
    if (!dressId || isNaN(dressId)) {
        res.status(400).send({message: "Parameter must be number!"});
        return;
    }

    Dress.getById(dressId, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Dress with id ${dressId} not found.`});
            else
                res.status(500).send({message: `Error retrieving Dress with id ${dressId}.`});
        } else {
            data.dress.photo = data.dress.photo.split(",");
            data.dress.photo.pop();
            res.send(data);
        }
    });
};

// PUT - update dress with id
exports.update = (req, res) => {
    if (!req.body || !req.body.name || !req.body.color || !req.body.photo || !req.body.category || isNaN(req.body.category)) {
        res.status(400).send({message: "Content must be have specific structure!"});
        return;
    }

    const dressId = req.params.dressId;
    if (!dressId || isNaN(dressId)) {
        res.status(400).send({message: "Parameter must be number!"});
        return;
    }

    const dress = new Dress({
        name: req.body.name,
        size: req.body.size,
        color: req.body.color,
        description: req.body.description,
        price: req.body.price,
        photo: req.body.photo,
        category: req.body.category
    });

    Dress.update(dressId, dress, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Dress with id ${dressId} not found.`});
            else
                res.status(500).send({message: `Error updating Dress with id ${dressId}.`});
        } else {
            data.dress.photo = data.dress.photo.split(",");
            data.dress.photo.pop();
            res.send(data);
        }
    });
};

// DELETE - dress with id
exports.delete = (req, res) => {
    const dressId = req.params.dressId;
    if (!dressId || isNaN(dressId)) {
        res.status(400).send({message: "Parameter must be number!"});
        return;
    }

    Dress.delete(dressId, (err, data) => {
        if (err) {
            if (err.kind === "not_found")
                res.status(404).send({message: `Dress with id ${dressId} not found.`});
            else
                res.status(500).send({message: `Error deleting Dress with id ${dressId}.`});
        } else
            res.send(data);
    });
};