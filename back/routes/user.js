var express = require ('express');
var ControladorUsuario = require('../controllers/ControladorUsuario');

var api = express.Router();

api.post('/registrar',ControladorUsuario.registrarUsuario);
api.post('/login',ControladorUsuario.login);
api.put('/usuario/editar/:id',ControladorUsuario.editarUsuario)

module.exports = api;