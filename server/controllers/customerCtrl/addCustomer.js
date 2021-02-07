const Customer = require('../../models/customerModel');
const { isEmpty } = require('../../utils/validation');

const CustomerName = async (req, res) => {
  try {
    const { name } = req.body;

    //validation
    if (isEmpty(name)) {
      res.status(400).json({ msg: 'Name is required' });
    }

    const newCustomer = new Customer({
      name,
    });

    const savedCustomer = await newCustomer.save();
    res.json({ savedCustomer });
  } catch (error) {
    res.status(500).json({ msg: `Error: ${error}` });
  }
};

module.exports = CustomerName;
