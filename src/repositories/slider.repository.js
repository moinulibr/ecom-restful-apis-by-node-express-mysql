const SliderInterface = require('./interfaces/slider.interface');
const Slider = require('../models/slider.model');

class SliderRepository extends SliderInterface {
    async getActiveSliders() {
        // note: Database fetch operation for active promotional banners
        return await Slider.findAll({
            where: { status: 1 },
            order: [['id', 'ASC']]
        });
    }
}
module.exports = new SliderRepository();