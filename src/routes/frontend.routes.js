const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');

// note: GET /api/v1/frontend/menu-categories
router.get('/menu-categories', categoryController.getFrontendMenu);

module.exports = router;