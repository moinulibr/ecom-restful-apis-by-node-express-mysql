class UserInterface {
    constructor() {
        if (this.constructor === UserInterface) {
            throw new Error("Cannot instantiate Abstract Class 'UserInterface' directly. ❌");
        }
    }

    async create(userData) {}
    async findByEmail(email) {}
    async findById(id) {}
    async updateToken(id, token) {}

    async updatePassword(id, hashedWithSaltPassword) {}
    async saveResetToken(email, token) {}
    async findResetToken(email, token) {}
    async deleteResetToken(email) {}
}

module.exports = UserInterface;