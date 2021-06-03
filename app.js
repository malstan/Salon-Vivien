const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

require("./server/routes/dress.routes")(app);

app.listen(port, () => console.log('server listens on port ' + port));