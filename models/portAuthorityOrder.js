const mongoose = require('mongoose');

const portAuthorityOrderSchema = new mongoose.Schema({
    orderAddress: {
        type: String,
        required: true
    },
    customStatus: {
        type: String,
        required: true
    },
    vesselInformation: {
        type: String, // URL or file path for the vessel information
        required: true
    },
    containerAndSealNumber: {
        type: String, // URL or file path for the container and seal number
        required: true
    },
    dispatchStatus: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const PortAuthorityOrder = mongoose.model('PortAuthorityOrder', portAuthorityOrderSchema);

module.exports = PortAuthorityOrder;
