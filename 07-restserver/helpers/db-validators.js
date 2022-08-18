const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRoleValido = async (role = '') => {

    const existeRol = await Role.findOne({role: role})

    if (!existeRol) {
        throw new Error(`El role ${role} no esta registrado en la BD`)
    }
}

const existeEmail = async (correo = '') => {

// Verificar si el correo existe
    const existeEmail = await Usuario.findOne({correo: correo})
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya esta registrado`)
    }
}

module.exports = {esRoleValido, existeEmail}