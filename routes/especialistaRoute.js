'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

//llamamos el controlador para que decirle en este caso que muestre los especialistas con el api.get
//o en el caso de guardar, con api.post
var especialistaController = require('../controllers/especialistaController');

var api = express.Router();

api.get('/especialista', especialistaController.listar);
api.post('/especialista', especialistaController.guardar);

module.exports = api;