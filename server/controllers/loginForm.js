require('env2')('.env');
const jwt = require('jsonwebtoken');
const { getLoginUser } = require('../database/queries');
const { comparePassword } = require('../utils/hashPassword');
const { loginSchema } = require('../utils/validation');

const loginForm = (req, res, next) => {
  const { username, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  console.log(error);
  if (error) {
    res.status(400).json({ msg: error.details[0].message });
  } else {
    getLoginUser(username)
      .then((result) => {
        if (result.rowCount) {
          const { password: hashedPw } = result.rows[0];
          comparePassword(password, hashedPw, (err, isCorrect) => {
            if (isCorrect) {
              jwt.sign({ user: username, is_admin: true },
                process.env.JWT_SECRET_KEY, (errorrrrrr, token) => {
                  if (errorrrrrr) {
                    res.status(500).json({ msg: 'internal server error' });
                  } else {
                    res.cookie('token', token).cookie('is_admin', true).cookie('userName', username).redirect(301, '/');
                  }
                });
            } else {
              res.status(400).json({ msg: 'incorrect password' });
            }
          });
        } else {
          res.status(400).json({ msg: 'incorrect email or password' });
        }
      })
      .catch((err) => next(err));
  }
};

module.exports = loginForm;
