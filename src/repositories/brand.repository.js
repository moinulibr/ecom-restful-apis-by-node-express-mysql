const BrandInterface = require('./interfaces/brand.interface');
const Brand = require('../models/brand.model');

class BrandRepository extends BrandInterface {
    async getTopBrands() {
        // note: ডাটাবেজ থেকে শুধু অ্যাক্টিভ (status=1) এবং টপ (is_top=1) ব্র্যান্ড ফিল্টার করা হচ্ছে
        // English note: Queries the database for active brands marked as top/featured
        return await Brand.findAll({
            where: { status: 1, is_top: 1 },
            order: [['id', 'DESC']]
        });
    }
}
module.exports = new BrandRepository(); // Single object export