const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        required: true,
        unique: true
    },
    dateOfOrder: {
        type: Date,
        required: true
    },
    orderStatus: {
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
    shippingCompany: {
        type: String,
        required: true
    },
    orderReceived: {
        type: String,
        required: true
    },
    billOfLading: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
