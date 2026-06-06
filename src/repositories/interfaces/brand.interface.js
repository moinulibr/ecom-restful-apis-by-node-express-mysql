class BrandInterface {
    constructor() {
        if (this.constructor === BrandInterface) {
            throw new Error("Abstract Class 'BrandInterface' cannot be instantiated directly. ❌");
        }
    }
    async getTopBrands() {} // note: Contract to fetch top brands for home showcase
}
module.exports = BrandInterface;