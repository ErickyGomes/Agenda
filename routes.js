const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');


// Rotas da home
route.get('/', homeController.index);

// Rotas da login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/register', loginController.login);


module.exports = route;
