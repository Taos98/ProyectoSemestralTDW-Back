'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

var especialidadController = require('../controllers/especialidadController');

var api = express.Router();

api.get('/especialidad', especialidadController.listar);

module.exports = api;