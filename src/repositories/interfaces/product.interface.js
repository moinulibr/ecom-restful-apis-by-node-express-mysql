class ProductInterface {
    constructor() {
        if (this.constructor === ProductInterface) {
            throw new Error("Abstract Class 'ProductInterface' cannot be instantiated directly. ❌");
        }
    }
    async getFrontendProducts(filters) {}
    async getProductDetailsBySlug(slug) {}
}
module.exports = ProductInterface;