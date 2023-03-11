const express = require('express');
const router  = express.Router();
const homeController = require('../../controller/contato.controller');

router.get('/contato', homeController.getContato)
router.post('/contato/cadastro', homeController.postContato)

module.exports = router;