const { getUserData } = require('../database/queries');

const userData = (req, res) => {
  const { userName } = req.cookies;
  getUserData(userName)
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err));
};
module.exports = userData;
