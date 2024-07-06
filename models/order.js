const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
       
        unique: true
    },
    dateOfOrder: {
        type: Date,
       
    },
    orderStatus: {
        type: String,
       
    },
    oilFilling: {
        type: String,
       
    },
    customStatus: {
        type: String,
       
    },
    shippingCompany: {
        type: String,
       
    },
    orderReceived: {
        type: String,
       
    },
    billOfLading: {
        type: String,
       
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
