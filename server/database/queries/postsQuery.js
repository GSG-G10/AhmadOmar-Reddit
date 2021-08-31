const connection = require('../config/connection');

const sqlScript = { text: 'SELECT posts.title, posts.image, posts.community, posts.date_created, posts.votes, users.username FROM posts INNER JOIN users ON posts.user_id = users.id;SELECT posts.title, COUNT(comments.id) AS comment_count FROM comments INNER JOIN posts ON posts.id = comments.post_id GROUP BY posts.title;' };

const postsQuery = () => connection.query(sqlScript);

module.exports = postsQuery;
