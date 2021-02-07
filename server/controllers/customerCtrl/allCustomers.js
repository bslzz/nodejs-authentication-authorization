const Customer = require('../../models/customerModel');

const AllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ customers });
  } catch (error) {
    res.status(500).json({ msg: `Error: ${error}` });
  }
};

module.exports = AllCustomers;
