var express = require ('express');
var ControladorCategoria = require('../controllers/ControladorCategoria');

var api = express.Router();

api.post('/categoria/registrar',ControladorCategoria.registrarCategoria);
api.get ('/categoria/:id',ControladorCategoria.obtnerCategoria);
api.put ('/categoria/editar/:id',ControladorCategoria.editarCategoria);
api.delete('/categoria/eliminar/:id',ControladorCategoria.eliminarCategoria);
api.get('/categorias/listar/:nombre?',ControladorCategoria.listarCartegoria);// si no le pongo ? el campo es obligatorio

module.exports = api;
