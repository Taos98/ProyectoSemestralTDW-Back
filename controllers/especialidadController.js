'use strict'
var Especialidad = require('../modelos/especialidad.js');

function listar(req, res) {
    Especialidad.find({}, (err, Especialidad) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!Especialidad) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({ Especialidad })
    })

}

module.exports = {
    listar
};