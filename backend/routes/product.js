const router = require('express').Router();
const checkAuthenticated = require('../middleware/auth');
const Product = require('../models/Product');
const mongoose = require('mongoose');




router.get('/products', checkAuthenticated, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/products', checkAuthenticated, async (req, res) => {
    try {
        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description ||"No description available",
            category: req.body.category,
            image_src: req.body.image_src,
            brand: req.body.brand,

        });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});
