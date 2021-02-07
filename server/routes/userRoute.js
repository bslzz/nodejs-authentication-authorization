const express = require('express');
const registerCtrl = require('../controllers/userCtrl/registerCtrl');
const loginCtrl = require('../controllers/userCtrl/loginCtrl');
const logOutCtrl = require('../controllers/userCtrl/logOutCtrl');
const router = express.Router();

router.route('/register').post(registerCtrl);
router.route('/login').post(loginCtrl);
router.route('/logout').get(logOutCtrl);

module.exports = router;
