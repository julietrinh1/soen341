const express = require('express');
const router = express.Router();
const ProductManager = require("./ProductManager");

router.get('/allproducts', async (req, res) => {
    const products = await ProductManager.getAllProducts()
    res.send(products) 
})
router.get('/shoes', async (req, res) => {
    const products = await ProductManager.getAllShoes()
    res.send(products) 
})
router.get('/shirts', async (req, res) => {
    const products = await ProductManager.getAllShirts()
    res.send(products) 
})
router.get('/pants', async (req, res) => {
    const products = await ProductManager.getAllPants()
    res.send(products) 
})
module.exports = router;