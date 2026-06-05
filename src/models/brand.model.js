const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Brand = dbConfig.sequelize.define('Brand', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true }, // note: Equal to Laravel's $table->id()
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 }, // note: 1 = Active, 0 = Inactive // English note: 1 represents Active status
    is_top: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 0 },
    is_new: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 }
}, {
    timestamps: true,
    tableName: 'brands' // note: Matching exact Laravel table name
});

module.exports = Brand;