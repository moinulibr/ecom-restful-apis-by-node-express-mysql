const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

const { verifyToken, restrictTo } = require('../middlewares/auth.middleware');

router.post('/register', authController.register); // note: POST /api/v1/auth/register
router.post('/login', authController.login);       // note: POST /api/v1/auth/login


//reset password
//forget password
router.post('/refresh-token', authController.refreshToken);

router.get('/admin-dashboard', verifyToken, restrictTo('admin'), (req, res) => {
    res.status(200).json({
        status: 'success',
        message: `Welcome to Admin Dashboard, User ID: ${req.user.id}`
    });
});


router.post('/logout', verifyToken, (req, res) => {
    //logut
    res.status(200).json({
        status: 'success',
        message: 'Logout successful!'
    });
});
module.exports = router;