'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//definimos el modelo los datos de la entidad

const ReservaSchema = new Schema({
    rutPaciente: String,
    especialista: [{ type: Schema.ObjectId, ref: "Especialista" }],
    horario: [{ type: Schema.ObjectId, ref: "Horario" }],
})

module.exports = mongoose.model('Reserva', ReservaSchema)