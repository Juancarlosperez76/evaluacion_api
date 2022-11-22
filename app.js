//Vincular clases o archivos
const Server = require('./models/server')

//Permite emplear el archivo .env
require('dotenv').config(); //Cargar toda la importación

//Instanciar un objeto de la clase Server
const server = new Server();

// Escuchar el puerto
server.listen()