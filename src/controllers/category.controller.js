const categoryService = require('../services/category.service');

class CategoryController {
    
    async getFrontendMenu(req, res) {
        try {
            const menuData = await categoryService.getCategoryTree();
            
            return res.status(200).json({
                status: 'success',
                message: 'Frontend category menu tree loaded successfully.',
                data: menuData
            });
        } catch (error) {
            return res.status(500).json({ 
                status: 'error', 
                message: error.message 
            });
        }
    }
}

module.exports = new CategoryController();