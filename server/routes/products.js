/*
var express = require('express');
const {productList} = require("../constants/Consts");
const ProductsController = require("../controller/ProductController");
var router = express.Router();

/!* GET product listing. *!/
router.get('/all', ProductsController.getAllProducts);
router.post('/menu', ProductsController.saveProduct);

module.exports = router;

*/


const {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem

} = require('../controller/ProductController');

// import express module
const express = require('express');

// create router object
const router = express.Router();

// handle GET request at root
router.get('/', getAllItems);

// handle GET request at "/:id" uri
router.get('/:id', getItem);

// handle POST request at root
router.post('/', addItem);

//update
router.put('/:id', updateItem);

//delete
router.delete('/:id', deleteItem);


module.exports = router;
