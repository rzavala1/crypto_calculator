const express = require('express');
const calculatorController  = require('../controllers/calculator.controller');

const router = express.Router();

//hacer cambios aqui de ruta
router.get('/', calculatorController.getAllContacts);
router.get('/:id', calculatorController.getContactById);

module.exports = router;