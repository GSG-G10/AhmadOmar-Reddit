const connection = require('../config/connection');

const getUserPosts = (userId) => connection.query(`SELECT posts.title, posts.image, posts.community, posts.date_created, posts.votes, users.username FROM posts INNER JOIN users ON posts.user_id = users.id WHERE users.id = ${userId}`);

module.exports = getUserPosts;
