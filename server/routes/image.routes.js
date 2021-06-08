module.exports = app => {
    const image = require("../controllers/image.controller");
    const multer = require("../config/multer.config");

    app.post("/api/imagesUpload", multer.array("multi-files", 10), image.upload);
};