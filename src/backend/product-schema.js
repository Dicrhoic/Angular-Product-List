const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    currency: String,
    vendor: String,
    link: String,
    description: String,
});

module.exports.mongoose.Model('Products', productSchema);