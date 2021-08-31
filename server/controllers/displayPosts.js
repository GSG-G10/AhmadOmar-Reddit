const { postsQuery } = require('../database/queries');

const displayPosts = (req, res) => {
  postsQuery()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

module.exports = displayPosts;
