const mongoose = require('mongoose');

const shippingOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
       
        unique: true
    },
    diagram: {
        type: String, // URL or file path for the diagram
       
    },
    excelSheet: {
        type: String, // URL or file path for the Excel sheet
       
    },
    price: {
        type: Number,
       
        min: 0
    },
    shippingCost: {
        type: String, // This can be updated dynamically
       
    },
    shippingManifest: {
        type: String, // URL or file path for the shipping manifest
       
    },
    pickOrderStatus: {
        type: String,
       
    },
    dropAtPortStatus: {
        type: String,
       
    }
}, {
    timestamps: true
});

const ShippingOrder = mongoose.model('ShippingOrder', shippingOrderSchema);

module.exports = ShippingOrder;
