const connection = require('../config/connection');

const getPostData = (postId) => connection.query(`SELECT * FROM posts WHERE id=${postId}`);

module.exports = getPostData;
