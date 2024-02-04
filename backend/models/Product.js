const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    case_color: {
        type: String,
        required: true
    },
    phone_model: {
        type: String,
        required: true
    },
    phone_color: {
        type: String,
        required: true
    },
    phone_case: {
        type: String,
        required: true
    },
    case_image: {
        type: String,
        required: true
    },
    user_id: {
        type: Object,
        required: true,
        References: 'User'
    },
    NumberofOrders: {
        type: Number,
        default: 1
    },
});

module.exports = mongoose.model('Product', productSchema);