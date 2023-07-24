const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },


});

const MenuModel = mongoose.model('Menu', menuSchema);

module.exports = MenuModel;