const SupplierOrderDetail = require('../models/supplierOrderDetail');

// Create a new supplier order detail
exports.createSupplierOrderDetail = async (req, res) => {
    try {
        const newSupplierOrderDetail = new SupplierOrderDetail(req.body);
        const savedSupplierOrderDetail = await newSupplierOrderDetail.save();
        res.status(201).json({
            message: 'Supplier Order Detail created successfully',
            data: savedSupplierOrderDetail
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating Supplier Order Detail',
            details: error.message
        });
    }
};

// Update a supplier order detail by ID
exports.updateSupplierOrderDetail = async (req, res) => {
    try {
        const updatedSupplierOrderDetail = await SupplierOrderDetail.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedSupplierOrderDetail) {
            return res.status(404).json({
                error: true,
                error_msg: 'Supplier Order Detail not found'
            });
        }
        res.status(200).json({
            message: 'Supplier Order Detail updated successfully',
            data: updatedSupplierOrderDetail
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating Supplier Order Detail',
            details: error.message
        });
    }
};

// Get a supplier order detail by ID
exports.getSupplierOrderDetailById = async (req, res) => {
    try {
        const supplierOrderDetail = await SupplierOrderDetail.findById(req.params.id);
        if (!supplierOrderDetail) {
            return res.status(404).json({
                error: true,
                error_msg: 'Supplier Order Detail not found'
            });
        }
        res.status(200).json({
            message: 'Supplier Order Detail fetched successfully',
            data: supplierOrderDetail
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Supplier Order Detail',
            details: error.message
        });
    }
};

// Get all supplier order details
exports.getAllSupplierOrderDetails = async (req, res) => {
    try {
        const supplierOrderDetails = await SupplierOrderDetail.find();
        res.status(200).json({
            message: 'Supplier Order Details fetched successfully',
            data: supplierOrderDetails
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Supplier Order Details',
            details: error.message
        });
    }
};
