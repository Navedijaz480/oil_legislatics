const Product = require('../models/product');

// Create a new product
exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json({
            message: 'Product created successfully',
            data: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error creating product',
            details: error.message
        });
    }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({
                error: true,
                error_msg: 'Product not found'
            });
        }
        res.status(200).json({
            message: 'Product updated successfully',
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error updating product',
            details: error.message
        });
    }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                error: true,
                error_msg: 'Product not found'
            });
        }
        res.status(200).json({
            message: 'Product fetched successfully',
            data: product
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching product',
            details: error.message
        });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            message: 'Products fetched successfully',
            data: products
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching products',
            details: error.message
        });
    }
};

exports.getProductsInCardByAddress = async (req, res) => {
    try {
        const { address } = req.params;
        const products = await Product.find({ addToCard: true, address });
        res.status(200).json({
            message: 'Products with addToCard true fetched successfully for the address',
            data: products
        });
    } catch (error) {
        res.status(500).json({
            error: true,
            error_msg: 'Error fetching products',
            details: error.message
        });
    }
};
