const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Session = dbConfig.sequelize.define('Session', {
    id: { type: DataTypes.STRING, primaryKey: true },
    user_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true },
    ip_address: { type: DataTypes.STRING(45), allowNull: true },
    user_agent: { type: DataTypes.TEXT, allowNull: true },
    payload: { type: DataTypes.TEXT('long'), allowNull: false },
    last_activity: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'sessions',
    timestamps: false
});

module.exports = Session;