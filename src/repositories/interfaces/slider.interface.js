class SliderInterface {
    constructor() {
        if (this.constructor === SliderInterface) {
            throw new Error("Abstract Class 'SliderInterface' cannot be instantiated directly. ❌");
        }
    }
    async getActiveSliders() {} // note: স্লাইডার আনার চুক্তি // English note: Contract to fetch active banners for homepage carousel
}
module.exports = SliderInterface;