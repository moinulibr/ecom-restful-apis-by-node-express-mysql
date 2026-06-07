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