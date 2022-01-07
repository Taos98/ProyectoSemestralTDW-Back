'use strict'
var Reserva = require('../modelos/reserva.js');

//aca iran todas las acciones que hara la reserva
//con esta funcion vamos a guardar los datos que traemos desde el inicio bajo el modelo de reserva

function guardar(req, res) {
    // Devolvemos una respuesta en JSON
    let reserva = new Reserva();

    reserva.rutPaciente = req.body.rutPaciente;
    reserva.especialista = req.body.especialista;
    reserva.horario = req.body.horario;

    reserva.save((err, reservastore) => {

        if (err) res.status(500).send(`Error base de datos> ${err}`)

        res.status(200).send({ "mensaje": "creado correctamente", 'usuario': reservastore })

    })
    
}

module.exports = {
    guardar
};

