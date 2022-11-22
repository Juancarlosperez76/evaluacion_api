const mongoose = require('mongoose')

//Establecer conexión con el servidor
const dbConnection = async() => {
    try {
        //Si hay conexión 
        mongoose.connect(process.env.MONGODB_CNN, {})
        console.log('Estableciendo conexión con la base de datos')
    }
    catch( error ) {
        //En el caso de error en la conexión
        console.log('Conexión no establecida')
    }
}

module.exports = {
    dbConnection //Exportar la funcion dbConnection
}