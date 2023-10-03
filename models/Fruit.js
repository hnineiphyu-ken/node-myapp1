const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Fruit', fruitSchema)