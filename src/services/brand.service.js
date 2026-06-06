const brandRepository = require('../repositories/brand.repository');

class BrandService {
    async getHomepageBrands() {
        // note: Acts as a bridge between controller and repository to handle brand domain logic
        return await brandRepository.getTopBrands();
    }
}
module.exports = new BrandService();