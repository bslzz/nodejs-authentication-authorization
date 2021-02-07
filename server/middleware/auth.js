const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ msg: 'Unauthorized' });

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err)
        return res.status(401).json({ msg: 'Invalid User Authentication.' });

      req.user = user;
      next();
    });
  } catch (error) {
    res.status(500).json({ msg: `Error: ${error}` });
  }
};

module.exports = auth;
