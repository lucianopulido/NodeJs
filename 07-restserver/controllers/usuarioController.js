const {request, response} = require('express')
const Usuario = require('../models/usuario')

const usuariosGet = (request, response) => {
    response.json({msg: "get API - controlador"})
}

const usuariosPost = async (request, response) => {

    const body = request.body
    const usuario = new Usuario(body)

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