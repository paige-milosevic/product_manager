const { response } = require('express');
const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Sucess'
    });
}

module.exports.createProduct = (req, res) => {
    console.log(req.body)
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}