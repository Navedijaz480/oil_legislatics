const express = require('express');
const router = express.Router();
const supplierOrderDetailController = require('../controllers/supplierOrderDetailController');

// Create a new supplier order detail
router.post('/supplierOrderDetails', supplierOrderDetailController.createSupplierOrderDetail);

// Update a supplier order detail by ID
router.put('/supplierOrderDetails/:id', supplierOrderDetailController.updateSupplierOrderDetail);

// Get a supplier order detail by ID
router.get('/supplierOrderDetails/:id', supplierOrderDetailController.getSupplierOrderDetailById);

// Get all supplier order details
router.get('/supplierOrderDetails', supplierOrderDetailController.getAllSupplierOrderDetails);

module.exports = router;
