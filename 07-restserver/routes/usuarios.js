const {Router} = require('express')
const {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
} = require("../controllers/usuarioController");
const {check} = require("express-validator");
const {validarCampos} = require("../middlewares/validar-campos");
const {esRoleValido, existeEmail, existeUsuarioPorId} = require("../helpers/db-validators");

const router = Router()


router.get('/', usuariosGet)

router.put('/:id', [
    check('id', 'No es un ID valido').isMongoId().custom(existeUsuarioPorId),
    check('role').custom(esRoleValido),
    validarCampos
], usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password debe ser de más de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail().custom(existeEmail),
    //check('role', 'No es un role permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom(esRoleValido),
    validarCampos
], usuariosPost)

router.delete('/:id', [
    check('id', 'No es un ID valido').isMongoId().custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router