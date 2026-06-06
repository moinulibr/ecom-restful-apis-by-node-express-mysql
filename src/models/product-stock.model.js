const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const ProductStock = dbConfig.sequelize.define('ProductStock', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    product_id: { type: DataTypes.BIGINT, allowNull: false },
    variation_id: { type: DataTypes.BIGINT, allowNull: true },
    qty_available: { type: DataTypes.DECIMAL(4, 2), defaultValue: 0 }
}, {
    tableName: 'product_stocks',
    timestamps: true
});

module.exports = ProductStock;