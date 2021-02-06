module.exports = {
  // Required fields
  isEmpty: (value) => {
    if (!value) return true;
    return false;
  },

  //email validation
  isEmail: (email) => {
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
  },

  // password length
  isLength: (password) => {
    if (password.length < 6) return true;
    return false;
  },

  // match password
  //   isMatch: (password, cf_password) => {
  //     if (password !== cf_password) return true;
  //     return false;
  //   },
};
