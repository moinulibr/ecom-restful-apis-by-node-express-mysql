const authService = require('../services/auth.service');

class AuthController {
    
    //User registration
    async register(req, res) {
        try {
            const newUser = await authService.registerUser(req.body);
            
            return res.status(201).json({
                status: 'success',
                message: 'User registered successfully!',
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                }
            });
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const result = await authService.loginUser(email, password);
            
            return res.status(200).json({
                status: 'success',
                message: 'Login successful!',
                data: result 
            });
        } catch (error) {
            return res.status(401).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    //user refresh token.
    async refreshToken(req, res) {
        try {
            const { refreshToken } = req.body;
            const result = await authService.generateNewAccessToken(refreshToken);
            
            return res.status(200).json({
                status: 'success',
                message: 'Access token refreshed successfully! 🔄',
                data: result
            });
        } catch (error) {
            return res.status(401).json({
                status: 'fail',
                message: error.message
            });
        }
    }


    async logout(req, res) {
        try {
            const userId = req.user?.id || 1; 
            await authService.logoutUser(userId);
            
            return ResponseUtil.success(res, 'Logged out successfully. Token revoked! 🚪');
        } catch (error) {
            return ResponseUtil.error(res, error.message, 500);
        }
    }

    async changePassword(req, res) {
        try {
            const userId = req.user?.id || 1;
            const { old_password, new_password } = req.body;

            if (!old_password || !new_password) {
                return ResponseUtil.error(res, 'Both current and new passwords are required.', 400);
            }

            await authService.changePassword(userId, old_password, new_password);
            return ResponseUtil.success(res, 'Password updated successfully! 🔒');
        } catch (error) {
            return ResponseUtil.error(res, error.message, 400);
        }
    }

    async forgotPassword(req, res) {
        try {
            const { email } = req.body;
            if (!email) return ResponseUtil.error(res, 'Email field is required.', 400);

            const result = await authService.sendPasswordResetToken(email);
            return ResponseUtil.success(res, 'Password reset token generated. Check terminal/response.', result);
        } catch (error) {
            return ResponseUtil.error(res, error.message, 400);
        }
    }

    async resetPassword(req, res) {
        try {
            const { email, token, new_password } = req.body;
            if (!email || !token || !new_password) {
                return ResponseUtil.error(res, 'Email, token, and new password are required.', 400);
            }

            await authService.resetPasswordWithToken(email, token, new_password);
            return ResponseUtil.success(res, 'Password has been reset successfully. You can now login with new password. 🎉');
        } catch (error) {
            return ResponseUtil.error(res, error.message, 400);
        }
    }
}

module.exports = new AuthController();

/*const authService = require('../services/auth.service');

class AuthController {
    
    async register(req, res) {
        try {
            const newUser = await authService.registerUser(req.body); // note: req.body - name, email, password
            
            return res.status(201).json({
                status: 'success',
                message: 'User registered successfully!',
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                }
            });
        } catch (error) {
            return res.status(400).json({
                status: 'fail',
                message: error.message
            });
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            const result = await authService.loginUser(email, password);
            
            return res.status(200).json({
                status: 'success',
                message: 'Login successful!',
                data: result // note: in this result - user, accessToken and refreshToken
            });
        } catch (error) {
            return res.status(401).json({
                status: 'fail',
                message: error.message // note: 'Invalid email or password!'
            });
        }
    }

    async refreshToken(req, res) {
        try {
            //get the refreshToken from the request body
            const { refreshToken } = req.body;
            
            //generateNewAccessToken
            const result = await authService.generateNewAccessToken(refreshToken);
            
            return res.status(200).json({
                status: 'success',
                message: 'Access token refreshed successfully! 🔄',
                data: result
            });
        } catch (error) {
            return res.status(401).json({
                status: 'fail',
                message: error.message
            });
        }
    }
}

module.exports = new AuthController(); // Singleton Controller Export*/