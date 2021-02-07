const Users = require('../../models/userModel');

module.exports = {
  allUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json({ users });
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
  },
};
