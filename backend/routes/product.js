const router = require('express').Router();
const checkAuthenticated = require('../middleware/auth');
const Product = require('../models/Product');
const mongoose = require('mongoose');




router.get('/', checkAuthenticated, async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(400).send(error);
    }
});


router.post('/addProduct', checkAuthenticated, async (req, res) => {
    try {
        const product = new Product({
        case_color: req.body.case_color,
        phone_model: req.body.phone_model,
        phone_case: req.body.phone_case,
        case_image: req.body.case_image,
        phone_color: req.body.phone_color,
        NumberofOrders : req.body.NumberofOrders || 1, 
        });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/getProduct/:id', checkAuthenticated, async (req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id, user_id: req.user._id });
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/deleteProduct/:id', checkAuthenticated, async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ _id: req.params.id, user_id: req.user._id });
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send("Product deleted successfully");
    } catch (error) {
        res.status(400).send(error);
    }
});

router.patch('/updateProduct/:id', checkAuthenticated, async (req, res) => {
    try {
        const product = await Product.findOneAndUpdate({ _id: req.params.id, user_id: req.user._id }, req.body , { new: true });
        if (!product) {
            return res.status(404).send("Product not found");
        }
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;