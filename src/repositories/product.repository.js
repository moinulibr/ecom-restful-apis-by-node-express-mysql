const ProductInterface = require('./interfaces/product.interface');
const { Product, ProductImage, Variation, ProductStock, Brand, Category } = require('../models/association'); // note: রিলেশনসহ মডেল লোড করা হলো

class ProductRepository extends ProductInterface {
    
    async getFrontendProducts(filters = {}) {
        const queryOptions = {
            where: { status: 1 }, 
            order: [['id', 'DESC']],
            include: [
                { model: ProductImage, as: 'images', attributes: ['id', 'image'] },
                { 
                    model: Variation, 
                    as: 'variations',
                    include: [{ model: ProductStock, as: 'stocks', attributes: ['qty_available'] }]
                },
                { model: Brand, as: 'brand', attributes: ['id', 'name'] },
                { model: Category, as: 'category', attributes: ['id', 'name', 'slug'] }
            ]
        };

        if (filters.is_feature) {
            queryOptions.where.is_feature = filters.is_feature;
        }

        return await Product.findAll(queryOptions);
    }

    async getProductDetailsBySlug(slug) {
        return await Product.findOne({
            where: { slug, status: 1 },
            include: [
                { model: ProductImage, as: 'images' },
                { 
                    model: Variation, 
                    as: 'variations',
                    include: [{ model: ProductStock, as: 'stocks' }]
                },
                { model: Brand, as: 'brand' },
                { model: Category, as: 'category' }
            ]
        });
    }
}

module.exports = new ProductRepository();