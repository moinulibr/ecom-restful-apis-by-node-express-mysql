const dataType = require('sequelize');
const sequelize = require('../config/db.config');
const { DataTypes } = dataType;
const bccrypt = require('bcryptjs');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, validate: { isEmail: true }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'staff'
    },
    refresh_token: { type: DataTypes.TEXT, allowNull: true }
}, {
    timestamps: true,
    tableName: 'users',
    hooks: {
        beforeCreate: async (user) => {
            const salt = await bccrypt.genSalt(10);
            user.password = await bccrypt.hash(user.password, salt);
        }
    }
});

module.exports = User;