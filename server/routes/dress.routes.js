module.exports = app => {
    const dress = require("../controllers/dress.controller.js");

    app.get("/api/dress", dress.getAll);
    app.post("/api/dress", dress.create);
    app.get("/api/dress/:dressId", dress.getById);
    app.put("/api/dress/:dressId", dress.update);
    app.delete("/api/dress/:dressId", dress.delete);
    app.get("/api/category/:category", dress.getByCategory);
};