const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.load)

router.get('/date', homeController.date)


// export it
module.exports = router;