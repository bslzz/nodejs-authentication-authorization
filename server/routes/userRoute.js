const express = require('express');
const router = express.Router();
const { register } = require('../controllers/userCtrl/registerCtrl');
const { login } = require('../controllers/userCtrl/loginCtrl');
const { logOut } = require('../controllers/userCtrl/logOutCtrl');
const { allUsers } = require('../controllers/userCtrl/allUsersCtrl');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logOut);
router.route('/allusers').get(allUsers);

module.exports = router;
