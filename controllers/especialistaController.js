'use strict'
var Especialista = require('../modelos/especialista.js');

function listar(req, res) {
    Especialista.find({}, (err, Especialista) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!Especialista) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({ Especialista })
    })

}

module.exports = {
    listar
};