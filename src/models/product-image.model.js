const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const ProductImage = dbConfig.sequelize.define('ProductImage', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    product_id: { type: DataTypes.BIGINT, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true }
}, {
    tableName: 'product_images',
    timestamps: true
});

module.exports = ProductImage; // note: Just table schema, no query