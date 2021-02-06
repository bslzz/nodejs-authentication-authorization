const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.route('/register').post(userCtrl.register);
router.route('/login').post(userCtrl.login);
router.route('/logout').get(userCtrl.logOut);

module.exports = router;
