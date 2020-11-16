const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.load)

router.post('/create-todo', homeController.creating)


// export it
module.exports = router;