/**
 * controller for image handling
 */

/* POST - response with image names */
exports.upload = (req, res) => {
    if (req.files.length === 0)
        res.status(400).send({message: "There are no files."});
    else {
        let names = "";
        req.files.map(file => names = names + file.originalname + ",");
        res.send({imageNames: names});
    }
};