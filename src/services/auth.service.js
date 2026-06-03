const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class AuthService {
    async registerUser(userData) {
        const existingUser = await userRepository.findByEmail(userData.email);
        if (existingUser) {
            throw new Error('Email is already registered! ❌');
        }
        return await userRepository.create(userData);
    }

    async loginUser(email, password) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('Invalid email or password! ❌');

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) throw new Error('Invalid email or password! ❌');

        const accessToken = jwt.sign(
            { id: user.id, role: user.role }, 
            process.env.JWT_ACCESS_SECRET, 
            { expiresIn: '15m' }
        );

        const refreshToken = jwt.sign(
            { id: user.id }, 
            process.env.JWT_REFRESH_SECRET, 
            { expiresIn: '7d' }
        );

        await userRepository.updateToken(user.id, refreshToken);

        return {
            user: { id: user.id, name: user.name, email: user.email, role: user.role },
            accessToken,
            refreshToken
        };
    }
}

module.exports = new AuthService();