const { Router } = require('express');
const router = Router();

const products = require('../../json/dbrestaurant.json');

router.get('/', (req,res) => {
  res.json(products);
});

module.exports = router;