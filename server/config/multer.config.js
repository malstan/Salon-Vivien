const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./public/figures/uploads"),
    filename: (req, file, cb) => cb(null, file.originalname),
});

const filter = (req, file, cb) => {
    if (file.mimetype.startsWith("image"))
        cb(null, true);
    else
        cb("Please upload only images.", false);
};

const upload = multer({storage: storage, filter: filter});

module.exports = upload;