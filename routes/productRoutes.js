const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/products', productController.createProduct);

// Update a product by ID
router.put('/products/:id', productController.updateProduct);

// Get a product by ID
router.get('/products/:id', productController.getProductById);

// Get all products
router.get('/products', productController.getAllProducts);

module.exports = router;
