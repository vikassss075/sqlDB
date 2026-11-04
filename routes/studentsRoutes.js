const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController');
const userController = require('../controller/usersController');
const busesController = require('../controller/busController')
router.post('/add', studentController.addEntries);
router.put('/update/:id', studentController.updateEntries);
router.delete('/delete/:id', studentController.deleteEntry);

router.post('/', userController.addUser);
router.get('/', userController.getUser);

router.post('/', busesController.addBus);
router.get('/', busesController.getBuses);




module.exports = router;