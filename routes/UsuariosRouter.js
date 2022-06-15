var express = require('express');
var router = express.Router();
const UsuariosController = require('../controller/UsuariosController');
const uploadDeAvatar = require('../middlewares/uploadDeAvatar');

router.post('/', uploadDeAvatar, UsuariosController.registrar);
router.get('/', UsuariosController.buscar);
module.exports = router;
