class BrandInterface {
    constructor() {
        if (this.constructor === BrandInterface) {
            throw new Error("Abstract Class 'BrandInterface' cannot be instantiated directly. ❌");
        }
    }
    async getTopBrands() {} // note: ফ্রন্টএন্ডের জন্য টপ ব্র্যান্ড আনার চুক্তি // English note: Contract to fetch top brands for home showcase
}
module.exports = BrandInterface;