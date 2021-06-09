/**
 * controller for image handling
 */
exports.upload = (req, res) => {
    if (req.files.length === 0)
        res.status(400).send({message: "There are no files."});
    else {
        let names = "";
        for (let image of req.files) {
            names = names + image.originalname + ", ";
        }
        console.log("Images uploaded.");
        res.send({imageNames: names});
    }
};