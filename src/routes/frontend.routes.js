const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const brandController = require('../controllers/brand.controller');
const sliderController = require('../controllers/slider.controller');

// note: GET /api/v1/frontend/menu-categories
router.get('/menu-categories', categoryController.getFrontendMenu);

// note: GET /api/v1/frontend/homepage-brands
router.get('/homepage-brands', brandController.getBrandsForHome);
// note: GET /api/v1/frontend/homepage-sliders
router.get('/homepage-sliders', sliderController.getSlidersForHome);

module.exports = router;