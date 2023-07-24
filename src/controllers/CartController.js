const CartModel = require('../models/CartModel');

exports.postMenu = async (req, res) => {
    const { id, name, price } = req.body;

    try {
        const newCart = new CartModel({ id, name, price });
        const savedCart = await newCart.save();
        res.status(201).json(savedCart);
    } catch (error) {
        res.status(500).json({ message: 'Error creating Menu', error: error.message });
    }
};

exports.getMenu = async (req, res) => {
    try {
        const menu = await CartModel.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: 'Error getting menu', error: error.message });
    }
};

exports.deleteMenu = async (req, res) => {
    const { id } = req.params;
    try {
      await CartModel.findByIdAndDelete(id);
      res.status(204).send();
    } catch (error) {
      console.error('Error deleting Menu:', error);
      res.status(500).json({ message: 'Error deleting Menu' });
    }
  };