const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);

module.exports = router;
