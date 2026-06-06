const sliderRepository = require('../repositories/slider.repository');

class SliderService {
    async getHomepageSliders() {
        // English note: Fetches active slider data without modifying raw database structure
        return await sliderRepository.getActiveSliders();
    }
}
module.exports = new SliderService();