const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const PasswordResetToken = dbConfig.sequelize.define('PasswordResetToken', {
    email: { type: DataTypes.STRING, primaryKey: true }, // note: ইমেইল এখানে প্রাইমারি কি
    token: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: true }
}, {
    tableName: 'password_reset_tokens',
    timestamps: false // note: শুধুমাত্র কাস্টম created_at আছে, তাই ডিফল্ট মেকানিজম অফ রাখা হলো
});

module.exports = PasswordResetToken;