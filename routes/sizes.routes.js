const express = require('express');
const router = express.Router();

const SizesController = require('../controllers/sizes.controller');

router.get('/sizes', SizesController.getAllSizes);

module.exports = router;