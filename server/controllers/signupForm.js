const { signupQuery } = require('../database/queries');
const { hashPassword } = require('../utils/hashPassword');
const { signupSchema } = require('../utils/validation');

const signupFrom = (req, res) => {
  const {
    username, email_address: emailaddress, password,
  } = req.body;
  const { error } = signupSchema.validate(req.body);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
  } else {
    hashPassword(password).then((hashed) => signupQuery(username, emailaddress, hashed)
      .then(() => res.redirect(301, '/login'))
      .catch((err) => console.log(err)));
  }
};

module.exports = signupFrom;
