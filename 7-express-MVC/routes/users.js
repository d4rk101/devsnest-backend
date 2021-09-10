const express = require('express');
const userController = require('../controllers/userController');
const { route } = require('../server');

const router = express.Router();

router.get('/home', userController.userHome);

route.post('/add', userController.addUser);

module.exports = router;