const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const PasswordResetToken = dbConfig.sequelize.define('PasswordResetToken', {
    email: { type: DataTypes.STRING, primaryKey: true }, 
    token: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true }
}, {
    tableName: 'password_reset_tokens',
    timestamps: false
});

module.exports = PasswordResetToken;