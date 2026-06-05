class CategoryInterface {
    constructor() {
        if (this.constructor === CategoryInterface) {
            throw new Error("Abstract Class 'CategoryInterface' cannot be instantiated directly. ❌");
            // English note: Prevents direct instantiation of the interface contract
        }
    }

    async getActiveCategories() {
        throw new Error("Method 'getActiveCategories()' must be implemented. ❌");
        // English note: Forces the child repository to implement this specific data method
    }
}

module.exports = CategoryInterface;