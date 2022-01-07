'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//definimos los datos de la entidad

const EspecialidadSchema = new Schema({
    nombreEspecialidad: String,
})

module.exports = mongoose.model('Especialidad',EspecialidadSchema)