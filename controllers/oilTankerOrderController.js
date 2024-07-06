const OilTankerOrder = require('../models/oilTankerOrder');

// Create a new oil tanker order
exports.createOilTankerOrder = async (req, res) => {
    try {
        const newOilTankerOrder = new OilTankerOrder(req.body);
        const savedOilTankerOrder = await newOilTankerOrder.save();
        res.status(201).json({
            message: 'Oil Tanker Order created successfully',
            data: savedOilTankerOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating Oil Tanker Order',
            details: error.message
        });
    }
};

// Update an oil tanker order by ID
exports.updateOilTankerOrder = async (req, res) => {
    try {
        const updatedOilTankerOrder = await OilTankerOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedOilTankerOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Oil Tanker Order not found'
            });
        }
        res.status(200).json({
            message: 'Oil Tanker Order updated successfully',
            data: updatedOilTankerOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating Oil Tanker Order',
            details: error.message
        });
    }
};

// Get an oil tanker order by ID
exports.getOilTankerOrderById = async (req, res) => {
    try {
        const oilTankerOrder = await OilTankerOrder.findById(req.params.id);
        if (!oilTankerOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Oil Tanker Order not found'
            });
        }
        res.status(200).json({
            message: 'Oil Tanker Order fetched successfully',
            data: oilTankerOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Oil Tanker Order',
            details: error.message
        });
    }
};

// Get all oil tanker orders
exports.getAllOilTankerOrders = async (req, res) => {
    try {
        const oilTankerOrders = await OilTankerOrder.find();
        res.status(200).json({
            message: 'Oil Tanker Orders fetched successfully',
            data: oilTankerOrders
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Oil Tanker Orders',
            details: error.message
        });
    }
};
