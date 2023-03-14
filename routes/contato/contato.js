const express = require('express');
const router  = express.Router();
const contatoController = require('../../controller/contato.controller');

router.get('/contato', contatoController.getContato)
router.post('/contato/cadastro', contatoController.postContato)
router.get('/editar-contato/:id', contatoController.getEditar)
router.post('/editar-contato/editar', contatoController.postEditar)

module.exports = router;