var express = require('express');
const {productList} = require("../constants/Consts");
const ProductsController = require("../controller/ProductController");
var router = express.Router();

/* GET product listing. */
router.get('/all', ProductsController.getAllProducts);
router.post('/menu', ProductsController.saveProduct);

module.exports = router;

