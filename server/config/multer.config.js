/**
 * configuration for multer
 */

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./public/figures/uploads"),
    filename: (req, file, cb) => cb(null, file.originalname),
});

const uploading = multer({
    storage: storage,
    limits: {fileSize: 5 * 1000 * 1000},
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg")
            cb(null, true);
        else {
            cb(null, false);
            const err = new Error("Only .png, .jpg, .jpeg format allowed!");
            err.name = "ExtensionError";
            return cb(err);
        }
    },
}).array("images", 10);

module.exports = uploading;