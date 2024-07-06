const mongoose = require('mongoose');

const portAuthorityOrderSchema = new mongoose.Schema({
    orderAddress: {
        type: String,
       
    },
    customStatus: {
        type: String,
       
    },
    vesselInformation: {
        type: String, // URL or file path for the vessel information
       
    },
    containerAndSealNumber: {
        type: String, // URL or file path for the container and seal number
       
    },
    dispatchStatus: {
        type: String,
       
    }
}, {
    timestamps: true
});

const PortAuthorityOrder = mongoose.model('PortAuthorityOrder', portAuthorityOrderSchema);

module.exports = PortAuthorityOrder;
