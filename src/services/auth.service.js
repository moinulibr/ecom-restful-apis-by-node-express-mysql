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

    async generateNewAccessToken(incomingRefreshToken) {
        //check incomingRefreshToken
        if (!incomingRefreshToken) {
            throw new Error('Refresh token is required! ❌');
        }

        try {
            //check the validity of the token, whether it is valid or not
            const decoded = jwt.verify(incomingRefreshToken, process.env.JWT_REFRESH_SECRET);

            // get the user from the database by id
            const user = await userRepository.findById(decoded.id);
            if (!user) {
                throw new Error('User not found! ❌');
            }

            //match the incoming refresh token with the one in the database
            if (user.refresh_token !== incomingRefreshToken) {
                throw new Error('Invalid or stolen refresh token! 🚫');
            }

            //if the refresh token is valid, generate a new access token for next 15 minutes
            const newAccessToken = jwt.sign(
                { id: user.id, role: user.role },
                process.env.JWT_ACCESS_SECRET,
                { expiresIn: '15m' }
            );

            return { accessToken: newAccessToken };
        } catch (error) {
            throw new Error('Refresh token expired or invalid! Please login again. ❌');
        }
    }
}

module.exports = new AuthService();