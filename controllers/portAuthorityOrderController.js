const PortAuthorityOrder = require('../models/portAuthorityOrder');

// Create a new port authority order
exports.createPortAuthorityOrder = async (req, res) => {
    try {
        const newPortAuthorityOrder = new PortAuthorityOrder(req.body);
        const savedPortAuthorityOrder = await newPortAuthorityOrder.save();
        res.status(201).json({
            message: 'Port Authority Order created successfully',
            data: savedPortAuthorityOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating Port Authority Order',
            details: error.message
        });
    }
};

// Update a port authority order by ID
exports.updatePortAuthorityOrder = async (req, res) => {
    try {
        const updatedPortAuthorityOrder = await PortAuthorityOrder.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedPortAuthorityOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Port Authority Order not found'
            });
        }
        res.status(200).json({
            message: 'Port Authority Order updated successfully',
            data: updatedPortAuthorityOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating Port Authority Order',
            details: error.message
        });
    }
};

// Get a port authority order by ID
exports.getPortAuthorityOrderById = async (req, res) => {
    try {
        const portAuthorityOrder = await PortAuthorityOrder.findById(req.params.id);
        if (!portAuthorityOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Port Authority Order not found'
            });
        }
        res.status(200).json({
            message: 'Port Authority Order fetched successfully',
            data: portAuthorityOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Port Authority Order',
            details: error.message
        });
    }
};

// Get all port authority orders
exports.getAllPortAuthorityOrders = async (req, res) => {
    try {
        const portAuthorityOrders = await PortAuthorityOrder.find();
        res.status(200).json({
            message: 'Port Authority Orders fetched successfully',
            data: portAuthorityOrders
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Port Authority Orders',
            details: error.message
        });
    }
};
