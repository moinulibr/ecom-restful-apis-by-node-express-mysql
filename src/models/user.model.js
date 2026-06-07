const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');
const bcrypt = require('bcryptjs');

const User = dbConfig.sequelize.define('User', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true }
    },
    image: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    mobile: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    gender: { 
        type: DataTypes.STRING(40), 
        allowNull: true, 
        defaultValue: 'male' 
    },
    dob: { 
        type: DataTypes.DATEONLY, 
        allowNull: true 
    },
    status: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 1 
    },
    contact_id: { 
        type: DataTypes.BIGINT, 
        allowNull: true 
    },
    email_verified_at: { 
        type: DataTypes.DATE, 
        allowNull: true 
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
    refresh_token: { 
        type: DataTypes.TEXT, 
        allowNull: true 
    },
    remember_token: { 
        type: DataTypes.STRING(100), 
        allowNull: true 
    }
}, {
    timestamps: true,
    tableName: 'users',
    underscored: true, //(created_at/updated_at)
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(user.password, salt);
            }
        }
    }
});

module.exports = User;

/*const { DataTypes } = require('sequelize'); 
const dbConfig = require('../config/db.config');
const bcrypt = require('bcryptjs');


const User = dbConfig.sequelize.define('User', {
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
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
    }
});

module.exports = User;*/