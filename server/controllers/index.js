const { notFoundError, serverError } = require('./error');
const signupFrom = require('./signupForm');
const displayPosts = require('./displayPosts');
const loginForm = require('./loginForm');

module.exports = {
  notFoundError, serverError, signupFrom, displayPosts, loginForm,
};
