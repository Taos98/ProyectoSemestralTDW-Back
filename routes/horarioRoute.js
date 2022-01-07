'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

//llamamos el controlador para que decirle en este caso que muestre los horarios con el api.get
//o en el caso de guardar, con api.post
var horarioController = require('../controllers/horarioController');

var api = express.Router();

api.post('/horario', horarioController.guardar);
api.get('/horario', horarioController.listar);

module.exports = api;