const connection = require('../config/connection');

const insertPostQuery = (title, content, image, community, user_id) => connection.query('INSERT INTO posts (title, content, image, community, user_id) VALUES ($1, $2, $3, $4, $5);', [title, content, image, community, user_id]);

module.exports = insertPostQuery;
