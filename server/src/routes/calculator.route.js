const express = require('express');
const calculatorController  = require('../controllers/calculator.controller');

const router = express.Router();

router.get('/', calculatorController.getDataCrypto);

module.exports = router;