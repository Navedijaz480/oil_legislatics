const mongoose = require('mongoose');

const shippingOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    diagram: {
        type: String, // URL or file path for the diagram
        required: true
    },
    excelSheet: {
        type: String, // URL or file path for the Excel sheet
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    shippingCost: {
        type: String, // This can be updated dynamically
        required: true
    },
    shippingManifest: {
        type: String, // URL or file path for the shipping manifest
        required: true
    },
    pickOrderStatus: {
        type: String,
        required: true
    },
    dropAtPortStatus: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const ShippingOrder = mongoose.model('ShippingOrder', shippingOrderSchema);

module.exports = ShippingOrder;
