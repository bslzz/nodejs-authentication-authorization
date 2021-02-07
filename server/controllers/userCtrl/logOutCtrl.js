module.exports = {
  logOut: (req, res) => {
    try {
      res.clearCookie('token').json({ msg: 'Logged Out' });
    } catch (error) {
      res.status(500).json({ msg: `Error: ${error}` });
    }
  },
};
