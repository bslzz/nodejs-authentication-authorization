const User = require('../../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { isEmpty, isLength, isEmail } = require('../../utils/validation');

module.exports = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      //validation
      if (isEmpty(email) || isEmpty(password))
        return res.status(400).json({ msg: 'All fields are required' });

      if (!isEmail(email))
        return res.status(400).json({ msg: 'Invalid Email' });

      if (isLength(password))
        return res
          .status(400)
          .json({ msg: 'Password must be 6 or more characters long' });

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

          //send the token in HTTP-only cookie
          res
            .cookie('token', token, {
              httpOnly: true,
            })
            .json({ msg: 'Register Success' });
        }
      );
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
  },
};
