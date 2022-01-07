'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

//llamamos el controlador para que decirle en este caso que muestre las especialidades con el api.get
var especialidadController = require('../controllers/especialidadController');

var api = express.Router();

api.get('/especialidad', especialidadController.listar);

module.exports = api;