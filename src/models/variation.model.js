const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Variation = dbConfig.sequelize.define('Variation', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    product_id: { type: DataTypes.BIGINT, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: true },
    sub_sku: { type: DataTypes.STRING, allowNull: true },
    purchase_price: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 },
    sell_price: { type: DataTypes.DECIMAL(12, 2), defaultValue: 0 }
}, {
    tableName: 'variations',
    timestamps: true
});

module.exports = Variation;