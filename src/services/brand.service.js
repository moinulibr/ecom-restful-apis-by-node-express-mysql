const brandRepository = require('../repositories/brand.repository');

class BrandService {
    async getHomepageBrands() {
        // লজিক: রিপোজিটরি থেকে ডাটা এনে কোনো এক্সট্রা ফিল্টারিং বা ক্যাশিং লজিক থাকলে এখানে হবে
        // English note: Acts as a bridge between controller and repository to handle brand domain logic
        return await brandRepository.getTopBrands();
    }
}
module.exports = new BrandService();