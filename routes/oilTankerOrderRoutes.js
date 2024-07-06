const express = require('express');
const router = express.Router();
const oilTankerOrderController = require('../controllers/oilTankerOrderController');

// Create a new oil tanker order
router.post('/oilTankerOrders', oilTankerOrderController.createOilTankerOrder);

// Update an oil tanker order by ID
router.put('/oilTankerOrders/:id', oilTankerOrderController.updateOilTankerOrder);

// Get an oil tanker order by ID
router.get('/oilTankerOrders/:id', oilTankerOrderController.getOilTankerOrderById);

// Get all oil tanker orders
router.get('/oilTankerOrders', oilTankerOrderController.getAllOilTankerOrders);

module.exports = router;
