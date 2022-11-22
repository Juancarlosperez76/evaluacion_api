const { Schema, model } = require('mongoose')

//Definir la extructura de la colección
const encuestaSchema = Schema({
    
    nombreEncuesta: {
        type: String
    },

    fecha: {
        type: String
    },

    documentoEncuestado: {
        type: Number
    },

    nombreEncuestado: {
        type: String
    },

    edad: {
        type: Number
    },

    genero: {
        type: String
    },

    empleado: {
        type: Boolean
    }

})

module.exports = model('encuesta', encuestaSchema)
