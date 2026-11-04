const express = require('express');
const router = express.Router();
const busesController = require('../controller/busController');

router.post('/', busesController.addBus);
router.get('/available/:seats', busesController.getBuses);

module.exports = router;
