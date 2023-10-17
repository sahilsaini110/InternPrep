const express = require('express');
const {handleUserSignUp} = require('../controllers/users')
const router = express.Router();

router.post('/', handleUserSignUp);

module.exports = router;