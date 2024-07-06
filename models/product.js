const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: [true, "user ID is required"],
      },
    name: {
        type: String,
        trim: true
    },
    image: {
        type: String,
    },
    parlitterPrice: {
        type: Number,
      
        min: 0
    },
    addToCard:{
        type: Boolean,
        default : false
    },
    quantityInLitter: {
        type: Number,
        min: 0
    },
    
    totalTanker: {
        type: Number,
        min: 0
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
