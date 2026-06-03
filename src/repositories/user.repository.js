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
