const productService = require('../services/product.service');

class ProductController {
    
    async getProducts(req, res) {
        try {
            const products = await productService.getHomeProducts(req.query);
            return res.status(200).json({
                status: 'success',
                results: products.length,
                data: products
            });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }

    async getProductBySlug(req, res) {
        try {
            const product = await productService.getProductDetails(req.params.slug);
            return res.status(200).json({
                status: 'success',
                data: product
            });
        } catch (error) {
            return res.status(404).json({ status: 'fail', message: error.message });
        }
    }
}

module.exports = new ProductController();