const express = require('express');
const router = express.Router();
const userController = require('../controller/usersController');

router.post('/', userController.addUser);
router.get('/', userController.getUser);

module.exports = router;
