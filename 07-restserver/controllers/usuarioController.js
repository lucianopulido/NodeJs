const {request, response} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs');

const usuariosGet = async (request, response) => {
    const {limite = 5, desde = 0} = request.query

    const usuariosPromise = Usuario.find({estado: true}).skip(desde).limit(limite)
    const totalPromise = Usuario.countDocuments({estado: true})

    const [total, usuarios] = await Promise.all([totalPromise, usuariosPromise])

    response.json({total, usuarios})
}

const usuariosPost = async (request, response) => {

    const {nombre, correo, password, role} = request.body
    const usuario = new Usuario({nombre, correo, password, role})
    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync()
    usuario.password = bcrypt.hashSync(password, salt)

    // Guardar en la BD
    await usuario.save()
    response.json(usuario)
}

const usuariosPut = async (request, response) => {

    const {id} = request.params
    const {_id, password, google, correo, ...resto} = request.body
    if (password) {
        const salt = bcrypt.genSaltSync()
        resto.password = bcrypt.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)
    response.json({usuario})
}

const usuariosDelete = async (request, response) => {
    const {id} = request.params
    // eliminación fisica
    //const usuario = await Usuario.findByIdAndDelete(id)

    //eliminación lógica
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false})
    response.json({usuario})
}

const usuariosPatch = (request, response) => {
    response.json({msg: "patch API - controlador"})
}

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete, usuariosPatch}