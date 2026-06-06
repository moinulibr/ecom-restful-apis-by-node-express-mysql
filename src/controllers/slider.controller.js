const sliderService = require('../services/slider.service');

class SliderController {
    async getSlidersForHome(req, res) {
        try {
            const sliders = await sliderService.getHomepageSliders();
            return res.status(200).json({
                status: 'success',
                results: sliders.length,
                data: sliders
            });
        } catch (error) {
            return res.status(500).json({ status: 'error', message: error.message });
        }
    }
}
module.exports = new SliderController();