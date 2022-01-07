'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');

var especialistaController = require('../controllers/especialistaController');

var api = express.Router();

api.get('/especialista', especialistaController.listar);

module.exports = api;