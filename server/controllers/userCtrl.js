const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      //validation
      if (!email || !password)
        return res.status(400).json({ msg: 'All fields are required' });

      const user = await User.findOne({ email });
      if (user) return res.status(400).json({ msg: 'Email already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      jwt.sign(
        { id: savedUser._id },
        process.env.JWT_SECRET_KEY,
        (err, token) => {
          if (err) return res.status(400).json({ msg: `Error: ${err}` });

          res.json({ token, savedUser });
        }
      );
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      //validation
      if (!email || !password)
        return res.status(400).json({ msg: 'All fields are required' });

      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ msg: 'Invalid credentials' });

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword)
        return res.status(401).json({ msg: 'Invalid email/password' });

      jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, (err, token) => {
        if (err) return res.status(400).json({ msg: `Error: ${err}` });

        res.json({ token, msg: 'User Logged in' });
      });
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
  },
};
