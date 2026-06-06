const Product = require('./product.model');
const Brand = require('./brand.model');
const Category = require('./category.model');
const ProductImage = require('./product-image.model');
const Variation = require('./variation.model');
const ProductStock = require('./product-stock.model');

// --- Sequelize ORM Relations Map (Laravel with equivalent) ---

Product.hasMany(ProductImage, { foreignKey: 'product_id', as: 'images' });
ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(Variation, { foreignKey: 'product_id', as: 'variations' });
Variation.belongsTo(Product, { foreignKey: 'product_id' });

Product.hasMany(ProductStock, { foreignKey: 'product_id', as: 'stocks' });
ProductStock.belongsTo(Product, { foreignKey: 'product_id' });

Variation.hasMany(ProductStock, { foreignKey: 'variation_id', as: 'stocks' });
ProductStock.belongsTo(Variation, { foreignKey: 'variation_id' });

Product.belongsTo(Brand, { foreignKey: 'brand_id', as: 'brand' });
Product.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

module.exports = { Product, ProductImage, Variation, ProductStock, Brand, Category };