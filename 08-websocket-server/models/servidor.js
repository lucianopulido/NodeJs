const express = require('express');
const cors = require('cors');
require('dotenv').config()
const http = require('http')
const {Server} = require('socket.io')
const {socketController} = require("../controllers/controller");

class Servidor {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app)
        this.io = new Server(this.server)

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        // Sockets
        this.sockets()
    }

    middlewares() {

        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static('public'));

    }

    routes() {
    }

    sockets() {
        this.io.on("connection", socketController)


    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Servidor
