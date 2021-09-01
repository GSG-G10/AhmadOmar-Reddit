const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hash(password, 10);

const comparePassword = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = { hashPassword, comparePassword };
