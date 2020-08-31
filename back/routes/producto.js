var express = require('express');
var ControladorProducto = require('../controllers/ControladorProducto');
var multipart = require('connect-multiparty');//para el manejo de imagenes 
var path = multipart({uploadDir: './uploads/productos'});

var api = express.Router();

api.post('/producto/registrar',path,ControladorProducto.registrarProducto);
api.get('/productos/:titulo?',ControladorProducto.listarProducto);
api.put('/producto/editar/:id/:img?',path,ControladorProducto.editarProducto);
api.get('/producto/:id',ControladorProducto.obtenerProducto);
api.delete('/producto/:id',ControladorProducto.eliminarProducto);
api.put('/producto/stock/:id',ControladorProducto.actualizarStock);
api.get('/producto/img/:img',ControladorProducto.getImg)

module.exports = api;