const CategoryInterface = require('./interfaces/category.interface');
const Category = require('../models/category.model');

class CategoryRepository extends CategoryInterface {
    
    async getActiveCategories() {
        //note: Querying the database to fetch active categories ordered by priority
        return await Category.findAll({ 
            where: { status: 1 },
            order: [['is_top', 'DESC'], ['id', 'ASC']] 
        });
    }
}

module.exports = new CategoryRepository();