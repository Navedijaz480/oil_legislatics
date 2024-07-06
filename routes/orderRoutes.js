const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Create a new order
router.post('/orders', orderController.createOrder);

// Update an order by ID
router.put('/orders/:id', orderController.updateOrder);

// Get an order by ID
router.get('/orders/:id', orderController.getOrderById);

// Get all orders
router.get('/orders', orderController.getAllOrders);

module.exports = router;
