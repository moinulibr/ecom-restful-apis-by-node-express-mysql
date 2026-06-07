const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Session = dbConfig.sequelize.define('Session', {
    id: { type: DataTypes.STRING, primaryKey: true }, // note: লারাভেলের সেশন আইডি স্ট্রিং হয়
    user_id: { type: DataTypes.BIGINT.UNSIGNED, allowNull: true }, // note: Users.id এর সাথে ম্যাচিং টাইপ
    ip_address: { type: DataTypes.STRING(45), allowNull: true },
    user_agent: { type: DataTypes.TEXT, allowNull: true },
    payload: { type: DataTypes.TEXT('long'), allowNull: false }, // note: longText এর জন্য TEXT('long')
    last_activity: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'sessions',
    timestamps: false // note: এই টেবিলে ডিফল্ট timestamps কলাম নেই
});

module.exports = Session;