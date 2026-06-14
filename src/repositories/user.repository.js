const UserInterface = require('./interfaces/user.interface');
const User = require('../models/user.model');

class UserRepository extends UserInterface {
    
    async create(userData) {
        return await User.create(userData);
    }

    async findByEmail(email) {
        return await User.findOne({ where: { email: email } });
    }

    async findById(id) {
        return await User.findByPk(id);
    }

    async updateToken(id, token) {
        return await User.update({ refresh_token: token }, { where: { id } });
    }

    async updatePassword(id, hashedWithSaltPassword) {
        return await User.update({ password: hashedWithSaltPassword }, { where: { id } });
    }

    async saveResetToken(email, token) {
        
        await PasswordResetToken.destroy({ where: { email } });
        return await PasswordResetToken.create({
            email,
            token,
            created_at: new Date()
        });
    }

    async findResetToken(email, token) {
        return await PasswordResetToken.findOne({ where: { email, token } });
    }

    async deleteResetToken(email) {
        return await PasswordResetToken.destroy({ where: { email } });
    }
}

module.exports = new UserRepository();

/*
const UserInterface = require('./interfaces/user.interface');
const User = require('../models/user.model');

class UserRepository extends UserInterface {
    
    async create(userData) {
        const user = await User.create(userData);
        return user;
    }

    async findByEmail(email) {
        const user = await User.findOne({ where: { email: email } });
        return user;
    }

    async findById(id) {
        const user = await User.findByPk(id);
        return user;
    }

    async updateToken(id, token) {
        const user = await User.update({ refresh_token: token }, { where: { id } });
        return user;
    }
}

module.exports = new UserRepository();
*/