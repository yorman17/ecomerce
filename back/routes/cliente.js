var express = require('express');
var ControladorCliente = require('../controllers/ControladorCliente');

var api = express.Router();

api.get('/clientes',ControladorCliente.listarCliente);
api.post('/cliente/registrar',ControladorCliente.registrarCliente);
api.put('/cliente/editar/:id',ControladorCliente.editarCliente);
api.delete('/cliente/eliminar/:id',ControladorCliente.eliminarCliente);
api.get('/cliente/:id',ControladorCliente.getCliente)

module.exports = api;