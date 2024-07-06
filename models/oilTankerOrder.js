const mongoose = require('mongoose');

const oilTankerOrderSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        unique: true
    },
    diagram: {
        type: String // URL or file path for the diagra
    },
    currentExcelSheet: {
        type: String // URL or file path for the current Excel shee
    },
    updateExcelSheet: {
        type: String // URL or file path for the updated Excel shee
    },
    billOfLading: {
        type: String // URL or file path for the bill of ladin
    },
    vesselInformation: {
        type: String // URL or file path for the vessel informatio
    },
    sealAndContainerNumbers: {
        type: String // URL or file path for the seal and container number
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const OilTankerOrder = mongoose.model('OilTankerOrder', oilTankerOrderSchema);

module.exports = OilTankerOrder;
