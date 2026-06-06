const brandService = require('../services/brand.service');

class BrandController {
    async getBrandsForHome(req, res) {
        try {
            const brands = await brandService.getHomepageBrands();
            return res.status(200).json({
                status: 'success',
                results: brands.length,
                data: brands
            });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }
}
module.exports = new BrandController();