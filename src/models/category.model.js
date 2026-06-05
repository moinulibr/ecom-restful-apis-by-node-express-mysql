const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Category = dbConfig.sequelize.define('Category', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: true },
    parent_id: { type: DataTypes.SMALLINT, allowNull: true }, // note: Self-referencing parent ID for subcategories
    image: { type: DataTypes.STRING, allowNull: true },
    slug: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 },
    is_top: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 0 },
    is_new: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 }
}, {
    timestamps: true,
    tableName: 'categories'
});

module.exports = Category;