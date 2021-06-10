/**
 * controller for image handling
 */

/* POST - response with image names */
exports.upload = (req, res) => {
    if (req.files.length === 0)
        res.status(400).send({message: "There are no files."});
    else {
        let names = "";
        names = req.files.map((image) => names += image.originalname + ',');
        res.send({imageNames: names});
    }
};