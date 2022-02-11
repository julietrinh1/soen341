const express = require('express');
const app = express();
var router = express.Router();

const port = '3000';
app.set('port', port);

app.get("/", function(req, res, next) {
    res.send("initial call");
    next("lol");
})

app.get("/lol", function(req, res, next) {
    res.send("next worked")
})

app.listen(port, () => {
    console.log('Example app');
});