const routes = require('express').Router();

const userController = require('./controller/userController');

routes.post('/register', userController.Create);

routes.post('/authentication', userController.Authentication);

module.exports = routes;