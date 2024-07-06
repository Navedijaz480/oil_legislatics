const mongoose = require('mongoose');

const supplierOrderDetailSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    orderStatus: {
        type: String,
        required: true
    },
    customer: {
        type: String,
        required: true
    },
    oilFilling: {
        type: String,
        required: true
    },
    customStatus: {
        type: String,
        required: true
    },
    customDocumentation: {
        type: String,
        required: true
    },
    exportDeclaration: {
        type: String,
        required: true
    },
    shippingCompany: {
        type: String,
        required: true
    },
    billsOfLading: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const SupplierOrderDetail = mongoose.model('SupplierOrderDetail', supplierOrderDetailSchema);

module.exports = SupplierOrderDetail;
