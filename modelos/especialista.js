'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//definimos el modelo de los datos de la entidad

const EspecialistaSchema = new Schema({
    rut: String,
    nombre: String,
    especialidad: [{ type: Schema.ObjectId, ref: "Especialidad" }],
})

module.exports = mongoose.model('Especialista',EspecialistaSchema)