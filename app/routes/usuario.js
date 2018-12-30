const express = require('express');
const Route = express.Router();

const authController = require('./../controladores/auth');

Route.post('/registrar', authController.signUp );
Route.post('/sign', authController.signIn );

module.exports = Route;