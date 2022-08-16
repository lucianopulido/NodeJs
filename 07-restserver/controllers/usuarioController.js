const {request, response} = require('express')

const usuariosGet = (request, response) => {
    response.json({msg: "get API - controlador"})
}

const usuariosPost = (request, response) => {
    response.json({msg: "post API - controlador"})
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