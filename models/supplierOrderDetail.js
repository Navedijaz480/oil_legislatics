const mongoose = require('mongoose');

const supplierOrderDetailSchema = new mongoose.Schema({
    orderId: {
        type: Number,
       
        unique: true
    },
    orderStatus: {
        type: String,
       
    },
    customer: {
        type: String,
       
    },
    oilFilling: {
        type: String,
       
    },
    customStatus: {
        type: String,
       
    },
    customDocumentation: {
        type: String,
       
    },
    exportDeclaration: {
        type: String,
       
    },
    shippingCompany: {
        type: String,
       
    },
    billsOfLading: {
        type: String,
       
    }
}, {
    timestamps: true
});

const SupplierOrderDetail = mongoose.model('SupplierOrderDetail', supplierOrderDetailSchema);

module.exports = SupplierOrderDetail;
