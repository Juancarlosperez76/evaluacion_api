const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config') //Vincular la conexión

class Server {
    constructor() {
        this.app = express()
        //El puerto de la aplicación
        this.port = process.env.port
        this.encuestasPath = '/api/encuesta'
        //Incluir funcionalidades a la aplicación
        this.middlewares()
        //Incluir rutas
        this.routes()
        //Método para la conexión a la Base de Datos
        this.conectarDB()
    }

    async conectarDB() { //Esperando la respuesta del servidor
        await dbConnection() //Sin await no espera respuesta
    }

    middlewares() { //Otras funcionalidades
        this.app.use(cors()) //Agrega seguridad a la aplicación
        this.app.use(express.static('public')) //Indicar directorio para páginas estaticas
        this.app.use(express.json());
    }

    routes() { //Rutas de la aplicación
        this.app.use(this.encuestasPath, require('../routes/encuestas'));
    }

    listen() { // Para escuchar el puerto
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }
}

module.exports = Server