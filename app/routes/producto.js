const express = require('express');
const Route = express.Router();
const middleware = require('./../middlewares');

const ProductoCtrl= require('./../controladores/Producto');

Route.get('/producto', ProductoCtrl.getProductos);
Route.get('/producto/:id', ProductoCtrl.getProducto);
Route.post('/producto', middleware.autenticar, ProductoCtrl.insertProducto);
Route.put('/producto/:id', middleware.autenticar, ProductoCtrl.updateProducto);
Route.delete('/producto/:id',middleware.autenticar, ProductoCtrl.deleteProducto);


module.exports = Route;