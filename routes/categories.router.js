const express = require('express');

const CategoriesService = require('../services/categories.services')

const router = express.Router();
const service = new CategoriesService();

//ojo con esta
router.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id)
  res.json(category);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const category = service.update(id, body)
  res.json(category)
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const respuesta =service.delete(id);
  res.json(respuesta);
});

module.exports = router;
