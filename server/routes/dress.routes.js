module.exports = app => {
    const dress = require("../controllers/dress.controller.js");

    app.get("/dress", dress.findAll);
};