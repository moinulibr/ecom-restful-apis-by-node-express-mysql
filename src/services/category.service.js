const categoryRepository = require('../repositories/category.repository');

class CategoryService {
    
    async getCategoryTree() {

        const categories = await categoryRepository.getActiveCategories();
        
        // English note: Extracting top-level parent categories from the collection
        const parentCategories = categories.filter(cat => !cat.parent_id);
        
        // English note: Mapping subcategories inside their respective parents to form a tree structure
        return parentCategories.map(parent => {
            const subCategories = categories.filter(cat => cat.parent_id === Number(parent.id));
            
            return {
                ...parent.toJSON(),
                sub_categories: subCategories
            };
        });
    }
}

module.exports = new ServiceLayer()