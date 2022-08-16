const express = require("express");
const cors = require("cors");
const {dbConnection} = require("../database/config");

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'

        //Conectar a base de datos
        this.conectarDB()

        // Middlewares
        this.middlewares()
        //Rutas de mi aplicacion
        this.routes()
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares() {
        //Directorio publico
        this.app.use(cors())
        this.app.use(express.static('public'))
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('El servidor esta ejecutando en el puerto: ', this.port)
        })
    }
}

module.exports = Server;