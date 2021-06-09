/**
 * routes for image handling
 */
module.exports = app => {
    const image = require("../controllers/image.controller");
    const multerForUpload = require("../config/multer.config");

    app.post("/api/imagesUpload", multerForUpload, image.upload);
};