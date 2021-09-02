const { getUserPosts } = require('../database/queries');
const { getLoginUser } = require('../database/queries');

const userPosts = (req, res) => {
  const { userName } = req.cookies;
  getLoginUser(userName)
    .then((resultt) => resultt.rows[0].id)
    .then((userid) => {
      console.log(userid);
      getUserPosts(userid)
        .then((result) => res.json(result.rows))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

module.exports = userPosts;
