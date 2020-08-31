var express = require('express');
var ControladorVenta = require('../controllers/ControladorVenta');

var api = express.Router();

api.post('/venta/registrar',ControladorVenta.registrarVenta);
api.get('/venta/:id',ControladorVenta.datosVenta);
api.get('/ventas',ControladorVenta.listadoVenta);
api.get('/venta/data/:id',ControladorVenta.detallesVenta);

module.exports = api;