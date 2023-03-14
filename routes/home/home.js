const express = require('express');
const router  = express.Router();
const homeController = require('../../controller/home.controller');

router.get('/home', homeController.getHome)
router.get('/delete-item/:id', homeController.deleteItem)

module.exports = router;