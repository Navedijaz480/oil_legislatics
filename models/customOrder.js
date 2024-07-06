const mongoose = require('mongoose');

const customOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    diagram: {
        type: String, // URL or file path for the diagram
        required: true
    },
    shippingManifest: {
        type: String, // URL or file path for the shipping manifest
        required: true
    },
    customDocuments: {
        type: String, // URL or file path for the custom documents
        required: true
    },
    exportDeclaration: {
        type: String, // URL or file path for the export declaration
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    tax: {
        type: String, // This can be updated dynamically
        required: true
    }
}, {
    timestamps: true
});

const CustomOrder = mongoose.model('CustomOrder', customOrderSchema);

module.exports = CustomOrder;
