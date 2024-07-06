const CustomOrder = require('../models/customOrder');

// Create a new custom order
exports.createCustomOrder = async (req, res) => {
    try {
        const newCustomOrder = new CustomOrder(req.body);
        const savedCustomOrder = await newCustomOrder.save();
        res.status(201).json({
            message: 'Custom Order created successfully',
            data: savedCustomOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating Custom Order',
            details: error.message
        });
    }
};

// Update a custom order by ID
exports.updateCustomOrder = async (req, res) => {
    try {
        const updatedCustomOrder = await CustomOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedCustomOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Custom Order not found'
            });
        }
        res.status(200).json({
            message: 'Custom Order updated successfully',
            data: updatedCustomOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating Custom Order',
            details: error.message
        });
    }
};

// Get a custom order by ID
exports.getCustomOrderById = async (req, res) => {
    try {
        const customOrder = await CustomOrder.findById(req.params.id);
        if (!customOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Custom Order not found'
            });
        }
        res.status(200).json({
            message: 'Custom Order fetched successfully',
            data: customOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Custom Order',
            details: error.message
        });
    }
};

// Get all custom orders
exports.getAllCustomOrders = async (req, res) => {
    try {
        const customOrders = await CustomOrder.find();
        res.status(200).json({
            message: 'Custom Orders fetched successfully',
            data: customOrders
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Custom Orders',
            details: error.message
        });
    }
};
