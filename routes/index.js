const express = require('express');
const productRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');
const peopleRouter = require('./people.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/people', peopleRouter);
}

module.exports = routerApi;
