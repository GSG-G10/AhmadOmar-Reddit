const { join } = require('path');

const singlePost = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'single-post.html'));
};
module.exports = singlePost;
