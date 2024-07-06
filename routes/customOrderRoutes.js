const express = require('express');
const router = express.Router();
const customOrderController = require('../controllers/customOrderController');

// Create a new custom order
router.post('/customOrders', customOrderController.createCustomOrder);

// Update a custom order by ID
router.put('/customOrders/:id', customOrderController.updateCustomOrder);

// Get a custom order by ID
router.get('/customOrders/:id', customOrderController.getCustomOrderById);

// Get all custom orders
router.get('/customOrders', customOrderController.getAllCustomOrders);

module.exports = router;
