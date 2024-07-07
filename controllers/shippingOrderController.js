const ShippingOrder = require('../models/shippingOrder');

// Create a new shipping order
exports.createShippingOrder = async (req, res) => {
    try {
        const newShippingOrder = new ShippingOrder(req.body);
        const savedShippingOrder = await newShippingOrder.save();
        res.status(201).json({
            message: 'Shipping Order created successfully',
            data: savedShippingOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating Shipping Order',
            details: error.message
        });
    }
};

// Update a shipping order by ID
exports.updateShippingOrder = async (req, res) => {
    try {
        const {id}=req.params;
        const updatedShippingOrder = await ShippingOrder.findOneAndUpdate({_id : id} ,req.body, { new: true, runValidators: true });
        if (!updatedShippingOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Shipping Order not found'
            });
        }
        res.status(200).json({
            message: 'Shipping Order updated successfully',
            data: updatedShippingOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating Shipping Order',
            details: error.message
        });
    }
};

// Get a shipping order by ID
exports.getShippingOrderById = async (req, res) => {
    try {
        const shippingOrder = await ShippingOrder.findById(req.params.id);
        if (!shippingOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Shipping Order not found'
            });
        }
        res.status(200).json({
            message: 'Shipping Order fetched successfully',
            data: shippingOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Shipping Order',
            details: error.message
        });
    }
};

// Get all shipping orders
exports.getAllShippingOrders = async (req, res) => {
    try {
        const shippingOrders = await ShippingOrder.find();
        res.status(200).json({
            message: 'Shipping Orders fetched successfully',
            data: shippingOrders
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching Shipping Orders',
            details: error.message
        });
    }
};
