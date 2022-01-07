'use strict'
require('dotenv').config()
const express = require('express')
const app = express()

 var cors = require('cors')
 app.use(cors())
 app.options('*', cors());

 //rutas que se usaran

var especialidad_ruta = require('./routes/especialidadRoute');
var especialista_ruta = require('./routes/especialistaRoute');
var horario_ruta = require('./routes/horarioRoute');
var reserva_ruta = require('./routes/reservaRoute');

const mongoose = require('mongoose') //llamo a mongoose


app.use('/api', especialidad_ruta);
app.use('/api', especialista_ruta);
app.use('/api', horario_ruta);
app.use('/api', reserva_ruta);

//conexion hacia la base de datos
  mongoose.connect(`mongodb://192.99.144.232:27017/grupo13?security=false`)
  .then(() => console.log('> Successfully connected to DB'))
  .catch(err => console.log(err))  

app.listen(5000, () => {


})