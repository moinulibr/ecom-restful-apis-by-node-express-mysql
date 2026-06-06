const productRepository = require('../repositories/product.repository');

class ProductService {
    
    async getHomeProducts(query) {
        const filters = {};

        if (query.featured === 'true') {
            filters.is_feature = 1;
        }
        return await productRepository.getFrontendProducts(filters);
    }

    async getProductDetails(slug) {
        const product = await productRepository.getProductDetailsBySlug(slug);

        if (!product) {
            throw new Error('Product not found or out of stock! ❌');
        }
        return product;
    }
}

module.exports = new ProductService();