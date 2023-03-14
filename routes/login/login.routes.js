const express = require('express');
const router  = express.Router();
const loginController = require('../../controller/login.controller');

router.get('/login', loginController.getLogin)
router.post('/login/criar', loginController.postLogin)

module.exports = router;