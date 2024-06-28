const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Registro de usuario
router.post('/register', userController.registerUser);

// Inicio de sesión
router.post('/login', userController.loginUser);

module.exports = router;
