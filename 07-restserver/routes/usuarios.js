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

const router = Router()

router.get('/', usuariosGet)

router.put('/', usuariosPut)

router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    check('password', 'El password debe ser de más de 6 letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('role', 'No es un role permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    validarCampos
], usuariosPost)

router.delete('/', usuariosDelete)

router.patch('/', usuariosPatch)


module.exports = router