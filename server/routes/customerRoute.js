const express = require('express');
const router = express.Router();
const CustomerName = require('../controllers/customerCtrl/addCustomer');
const AllCustomers = require('../controllers/customerCtrl/allCustomers');
const auth = require('../middleware/auth');

router.route('/').post(auth, CustomerName);
router.route('/allcustomers').get(auth, AllCustomers);

module.exports = router;
