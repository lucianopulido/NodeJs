const {io} = require('../server');
const {Usuarios} = require("../classes/usuarios");
const {crearMensaje} = require("../utils/utils")

const usuarios = new Usuarios()

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.on('entrarChat', (usuario, callback) => {

        if (!usuario.nombre || !usuario.sala) {
            return callback({
                error: true,
                mensaje: 'El nombre y la sala son necesarios'
            })
        }

        client.join('data.sala')

        let personas = usuarios.agregarPersona(client.id, usuario.nombre, usuario.sala)
        client.broadcast.to(usuario.sala).emit('listaPersona', usuarios.getPersonasPorSala(usuario.sala))
        callback(personas)
        console.log(usuario)
    })

    client.on('crearMensaje', (data) => {

        let persona = usuarios.getPersona(client.id)

        let mensaje = crearMensaje(persona.nombre, data.mensaje)
        client.broadcast.to(persona.sala).emit('crearMensaje', mensaje)
    })

    client.on('disconnect', () => {
        let personaBorrada = usuarios.borrarPersona(client.id)
        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('Administrador', `${personaBorrada.nombre} salió`))
        client.broadcast.to(personaBorrada.sala).emit('listaPersona', usuarios.getPersonasPorSala(personaBorrada.sala))
    })

    // Mensajes privados
    client.on('mensajePrivado', (mensaje) => {
        0
        let persona = usuarios.getPersona(client.id)

        client.broadcast.to(mensaje.para).emit('mensajePrivado', crearMensaje(persona.nombre, mensaje.mensaje))
    })

});