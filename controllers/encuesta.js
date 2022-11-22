const encuesta = require('../models/encuesta')

const getEncuesta = async (req, res) => {
    const encuestas = await encuesta.find({ "empleado": false })

    let edad = 0;
    let promedioEdades = 0;

    for (let i = 0; i < encuestas.length; i++) {
        let encuestado = encuestas[i];
        edad += encuestado.edad;
        promedioEdades++
    }

    edad = edad / promedioEdades;

    res.json({
        msg: 'Encuesta GET API',
        encuestas,
        msg: `El promedio de las edades de los desempleados es: ${edad}`
    })
}

const postEncuesta = async (req, res) => {
    //Desesctructuración de parámetros
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    //Crear el objeto
    const encuesta1 = new encuesta({ nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado })
    //Guardar datos en MongoDB
    await encuesta1.save()

    res.json({
        msg: 'Encuesta POST API',
        encuesta1
    })
}

//Put: modificación
const putEncuesta = async (req, res) => {
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    //
    const encuesta1 = await encuesta.findOneAndUpdate({ documentoEncuestado: documentoEncuestado }, { nombreEncuesta: nombreEncuesta, fecha: fecha, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado })

    res.json({
        msg: 'Encuesta API PUT',
        encuesta1
    })
}

//Patch: modificación parcial
const patchEncuesta = async (req, res) => {
    const { documentoEncuestado, nombreEncuestado } = req.body

    const encuesta1 = await encuesta.findOneAndUpdate({ documentoEncuestado: documentoEncuestado }, { nombreEncuestado: nombreEncuestado })

    res.json({
        msg: 'Encuesta API PATCH',
        encuesta1
    })
}

//Eliminar 
const deleteEncuesta = async (req, res) => {
    const { documentoEncuestado } = req.query

    //Buscar y borrar
    //Antes de las llaves es el atributo
    const encuesta1 = await encuesta.findOneAndDelete({ documentoEncuestado: documentoEncuestado })

    res.json({
        msg: 'Encuesta DELETE API',
        encuesta1
    })
}

module.exports = {
    getEncuesta,
    postEncuesta,
    putEncuesta,
    patchEncuesta,
    deleteEncuesta
}