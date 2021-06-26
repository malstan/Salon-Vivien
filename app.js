const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/images', express.static('./public/figures/uploads'));

app.get('/', (req, res) =>
    res.sendFile(__dirname + "/public/index.html")
);

require("./server/nodejs/routes/dress.routes")(app);
require("./server/nodejs/routes/image.routes")(app);
require("./server/nodejs/routes/admin.routes")(app);

app.all("*", (req, res) =>
    res.status(400).send({message: "Bad request!"})
);

app.listen(port, () => console.log('server listens on port ' + port));