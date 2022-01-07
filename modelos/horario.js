'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HorarioSchema = new Schema({
    id_esp: [{ type: Schema.ObjectId, ref: "Especialista" }],
    fecha: Date,
    disponibilidad: Boolean
})

module.exports = mongoose.model('Horario',HorarioSchema)