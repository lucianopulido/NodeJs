const {request, response} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');

const usuariosGet = (request, response) => {
    response.json({msg: "get API - controlador"})
}

const usuariosPost = async (request, response) => {

    const {nombre, correo, password, role} = request.body
    const usuario = new Usuario({nombre, correo, password, role})
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    // Guardar en la BD
    await usuario.save()

    response.json({
        usuario
    })
}

const usuariosPut = (request, response) => {
    response.json({msg: "put API - controlador"})
}

const usuariosDelete = (request, response) => {
    response.json({msg: "delete API - controlador"})
}

const usuariosPatch = (request, response) => {
    response.json({msg: "patch API - controlador"})
}

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch}