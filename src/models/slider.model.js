const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Slider = dbConfig.sequelize.define('Slider', {
    id: { type: DataTypes.BIGINT, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: true },
    image: { type: DataTypes.STRING, allowNull: true },
    link: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 1 },
    is_new: { type: DataTypes.TINYINT, allowNull: true, defaultValue: 0 }
}, {
    timestamps: true,
    tableName: 'sliders'
});

module.exports = Slider;