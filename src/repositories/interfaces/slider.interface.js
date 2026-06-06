class SliderInterface {
    constructor() {
        if (this.constructor === SliderInterface) {
            throw new Error("Abstract Class 'SliderInterface' cannot be instantiated directly. ❌");
        }
    }
    async getActiveSliders() {} // note: Contract to fetch active banners for homepage carousel
}
module.exports = SliderInterface;