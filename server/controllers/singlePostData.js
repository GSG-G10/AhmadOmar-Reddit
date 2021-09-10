const { getPostData } = require('../database/queries');

const singlePostData = (req, res) => {
  const { postId } = req.params;
  getPostData(postId)
    .then((result) => res.json(result.rows))
    .catch((err) => console.log(err));
};
module.exports = singlePostData;
