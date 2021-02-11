const routes = require('express').Router();

const userController = require('./controller/userController');

routes.post('/register', userController.Create);

module.exports = routes;