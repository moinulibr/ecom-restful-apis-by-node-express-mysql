const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/register', authController.register); // note: POST /api/v1/auth/register
router.post('/login', authController.login);       // note: POST /api/v1/auth/login

module.exports = router;