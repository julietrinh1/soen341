const express = require('express');
const router = express.Router();
const ProductManager = require("./ProductManager");
const { getProductByName, createProduct } = require('./ProductManager');

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

router.post('/admin/add-products', async (req, res) => {

    const { Category, Description, Name, Price, Image } = req.body;

    sampleProduct = await getProductByName(Name);

    if (sampleProduct) {
        return res.status(400).send(null);
    }

    const product = await createProduct({
        Category: Category,
        Description: Description,
        Name: Name,
        Price: Price,
        Image: Image,
    })

    res.status(201).send(product);
})
module.exports = router;