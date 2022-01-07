'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

var reservaController = require('../controllers/reservaController');

var api = express.Router();

api.post('/reserva', reservaController.guardar);

module.exports = api;