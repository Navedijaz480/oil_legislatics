const express = require('express');
const router = express.Router();
const shippingOrderController = require('../controllers/shippingOrderController');

// Create a new shipping order
router.post('/shippingOrders', shippingOrderController.createShippingOrder);

// Update a shipping order by ID
router.put('/shippingOrders/:id', shippingOrderController.updateShippingOrder);

// Get a shipping order by ID
router.get('/shippingOrders/:id', shippingOrderController.getShippingOrderById);

// Get all shipping orders
router.get('/shippingOrders', shippingOrderController.getAllShippingOrders);

module.exports = router;
