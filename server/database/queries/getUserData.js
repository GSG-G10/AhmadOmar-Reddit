const connection = require('../config/connection');

const getUserData = (username) => connection.query(`SELECT username, email_address FROM users WHERE username = '${username}';`);

module.exports = getUserData;
