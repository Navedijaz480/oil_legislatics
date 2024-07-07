const Order = require('../models/order');

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json({
            message: 'Order created successfully',
            data: savedOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating order',
            details: error.message
        });
    }
};

// Update an order by ID
exports.updateOrder = async (req, res) => {
    try {
        const {id}=req.params;
        const updatedOrder = await Order.findOneAndUpdate({_id : id} ,  req.body, { new: true, runValidators: true });
        if (!updatedOrder) {
            return res.status(404).json({
                error: true,
                error_msg: 'Order not found'
            });
        }
        res.status(200).json({
            message: 'Order updated successfully',
            data: updatedOrder
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating order',
            details: error.message
        });
    }
};

// Get an order by ID
exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({
                error: true,
                error_msg: 'Order not found'
            });
        }
        res.status(200).json({
            message: 'Order fetched successfully',
            data: order
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching order',
            details: error.message
        });
    }
};

// Get all orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json({
            message: 'Orders fetched successfully',
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching orders',
            details: error.message
        });
    }
};
