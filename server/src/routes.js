const routes = require('express').Router();
const authenticate = require('./middlewares/authenticate');
const userController = require('./controller/userController');

routes.post('/register', userController.Create);

routes.post('/authentication', userController.Authentication);

routes.use(authenticate);

routes.get('/name', userController.Name);

module.exports = routes;