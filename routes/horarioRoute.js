'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

var horarioController = require('../controllers/horarioController');

var api = express.Router();

api.post('/horario', horarioController.guardar);
api.get('/horario', horarioController.listar);

module.exports = api;