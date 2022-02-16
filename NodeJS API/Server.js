const express = require('express');
const app = express();

const port = '4000';

app.set('port', port);

app.use(express.json());

const usersRouter = require("./UserController");

app.use('/users', usersRouter);

app.listen(port, () => console.log("Server Started"));
