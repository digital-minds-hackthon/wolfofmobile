const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minLength: [3,"Name must be at least 3 characters long"],
        maxLength: [20,"Name must be at most 20 characters long"],
    },
    brand: {
        type: String,
        required: [true,"Brand is required"],
        minLength: [3,"Brand must be at least 3 characters long"],
        maxLength: [20,"Brand must be at most 20 characters long"],
    },
    image_src: {
        type: String,
        required: [true,"Image is required"],
        RegExp: /^([a-zA-Z0-9_\-\.]+)\.(jpg|jpeg|png|gif)$/
    },
    
    price: {
        type: Number,
        required: [true,"Price is required"],
        min: [0,"Price must be a positive number"],
    },
    description: {
        type: String,
        required: [true,"Description is required"],
        minLength: [5,"Description must be at least 5 characters long"],
        maxLength: [100,"Description must be at most 100 characters long"],
    },
    category: {
        type: String,
        required: [true,"Category is required"],
        minLength: [3,"Category must be at least 3 characters long"],
        maxLength: [20,"Category must be at most 20 characters long"],
    },
});