const connection = require('../config/connection');

const signupQuery = (username, emailaddress, password) => connection.query('INSERT INTO users (username, email_address, password) VALUES ($1, $2, $3);', [username, emailaddress, password]);

module.exports = signupQuery;
