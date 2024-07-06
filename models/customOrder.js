const mongoose = require('mongoose');

const customOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        unique: true
    },
    diagram: {
        type: String, // URL or file path for the diagram
        
    },
    shippingManifest: {
        type: String, // URL or file path for the shipping manifest
        
    },
    customDocuments: {
        type: String, // URL or file path for the custom documents
        
    },
    exportDeclaration: {
        type: String, // URL or file path for the export declaration
        
    },
    price: {
        type: Number,
        min: 0
    },
    tax: {
        type: String, // This can be updated dynamically
        
    }
}, {
    timestamps: true
});

const CustomOrder = mongoose.model('CustomOrder', customOrderSchema);

module.exports = CustomOrder;
