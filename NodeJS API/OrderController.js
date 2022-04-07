const express = require('express');
const { viewUserOrders, createOrder, cancelOrder } = require('./OrderManager');
const router = express.Router();


router.post('/createorder', async (req, res) => {
    const sampleOrder = req.body;

    const order = await createOrder(sampleOrder);

    if(!order){
        res.status(400).send(null);
    }

    else res.status(201).send(order);
})

router.post('/allorders', async (req, res) => {
    const user = req.body;

    const orders = await viewUserOrders(user);

    if(!orders){
        res.status(400).send(null);
    }

    else res.status(200).send(orders);
})

router.put('/cancelorder', async (req, res) => {
    cancelOrder(req.body.id).then(() => {
        res.status(200).send(null)
    })
})

module.exports = router;