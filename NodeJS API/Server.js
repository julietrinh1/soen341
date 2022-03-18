const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

const port = '4000';

app.set('port', port);

app.use(express.json());

const usersRouter = require("./UserController");
const ProductsRouter = require("./ProductsController");
const orderRouter = require("./OrderController");

app.use('/users', usersRouter);
app.use('/Products', ProductsRouter);
app.use('/orders', orderRouter);

app.listen(port, () => console.log("Server Started"));
