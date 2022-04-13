const express = require('express');

const router = express.Router();



router.get('/', (req, res) => {
  res.json([
    {
      name: 'Luis',
      age: 25,
      role: 'Product Desing'
    },
    {
      name: 'Paula',
      age: 32,
      role: 'Backend Engineer',
    }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Luis',
    age: 25,
    role: 'Product Desing'
  });
});

module.exports = router;
