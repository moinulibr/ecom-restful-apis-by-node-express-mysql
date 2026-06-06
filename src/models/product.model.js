const { DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const Product = dbConfig.sequelize.define('Product', {
    id: { 
        type: DataTypes.BIGINT, 
        autoIncrement: true, 
        primaryKey: true 
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    image: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    slug: { 
        type: DataTypes.STRING, 
        allowNull: true,
        unique: true
    },
    sku: { 
        type: DataTypes.STRING(100), 
        allowNull: true 
    },
    type: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    description: { 
        type: DataTypes.TEXT, 
        allowNull: true 
    },
    stock_alert: { 
        type: DataTypes.DECIMAL(4, 2), 
        allowNull: true, 
        defaultValue: 1.00 
    },
    brand_id: { 
        type: DataTypes.BIGINT, 
        allowNull: true 
    },
    unit_id: { 
        type: DataTypes.BIGINT, 
        allowNull: true 
    },
    category_id: { 
        type: DataTypes.BIGINT, 
        allowNull: true 
    },
    sub_category_id: { 
        type: DataTypes.BIGINT, 
        allowNull: true 
    },
    status: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 1 
    },
    is_ecom: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 0 
    },
    is_feature: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 0 
    },
    is_reco: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 0 
    },
    is_new: { 
        type: DataTypes.TINYINT, 
        allowNull: true, 
        defaultValue: 1 
    },

    purchase_price: { 
        type: DataTypes.DECIMAL(8, 2), 
        allowNull: true, 
        defaultValue: 0.00 
    },
    sell_price: { 
        type: DataTypes.DECIMAL(8, 2), 
        allowNull: true, 
        defaultValue: 0.00 
    },
    wholesale_price: { 
        type: DataTypes.DECIMAL(8, 2), 
        allowNull: true, 
        defaultValue: 0.00 
    }
}, {
    tableName: 'products',
    timestamps: true 
});

module.exports = Product;