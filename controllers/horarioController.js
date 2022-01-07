'use strict'
var Horario = require('../modelos/Horario.js');

function listar(req, res) {
    Horario.find({}, (err, Horario) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!Horario) return res.status(404).send({ message: 'Error, horario no disponible' })

        res.status(200).send({ Horario })
    })

}

function guardar(req, res) {
    // Devolvemos una respuesta en JSON
    let horario = new Horario();

    horario.id_esp = req.body.id_esp;
    horario.fecha = req.body.fecha;
    horario.disponibilidad = req.body.disponibilidad;

    horario.save((err, horariostore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje": "creado correctamente", 'usuario': horariostore })

    })
    
}

module.exports = {
    listar,
    guardar
};