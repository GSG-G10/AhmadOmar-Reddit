const connection = require('../config/connection');

const getLoginUser = (username) => connection.query('SELECT * FROM users WHERE username = $1;', [username]);

module.exports = getLoginUser;
