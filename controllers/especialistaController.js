'use strict'
var Especialista = require('../modelos/especialista.js');

//definimos funciones para listar a los especialistas y para guardar nuevos

function listar(req, res) {
    Especialista.find({}, (err, Especialista) => {
        if (err) return res.status(500).send({ message: 'error al realizar la peticion' })
        if (!Especialista) return res.status(404).send({ message: 'Error la persona no existe' })

        res.status(200).send({ Especialista })
    })

}

function guardar(req, res) {
    // Devolvemos una respuesta en JSON
    let especialista = new Especialista();

    especialista.rut = req.body.rut;
    especialista.nombre = req.body.nombre;
    especialista.especialidad = req.body.especialidad;

    especialista.save((err, especialistastore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje": "creado correctamente", 'usuario': especialistastore })

    })
    
}

module.exports = {
    listar,
    guardar
};