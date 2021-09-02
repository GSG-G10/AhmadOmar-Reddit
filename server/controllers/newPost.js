const { insertPostQuery } = require('../database/queries');
const { getUserData } = require('../database/queries');

const newPost = (req, res) => {
  const {
    choose_community: chooseCommunity,
    post_title: postTitle,
    post_image: postImage,
    post_text: postText,
  } = req.body;
  const { userName } = req.cookies;
  getUserData(userName)
    .then((result) => result.rows[0].id)
    .then((userId) => {
      insertPostQuery(postTitle, postText, postImage, chooseCommunity, userId)
        .then(() => res.redirect(301, '/dashboard'))
        .catch((err) => console.log(err));
    });
};

module.exports = newPost;
