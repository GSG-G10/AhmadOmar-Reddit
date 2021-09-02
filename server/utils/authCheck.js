const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.status(401).json({ msg: 'you are not authorized' });
    } else if (decoded.is_admin) {
      next();
    }
  });
};

module.exports = authCheck;
