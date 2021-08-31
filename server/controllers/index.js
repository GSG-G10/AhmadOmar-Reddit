const { notFoundError, serverError } = require('./error');
const signupFrom = require('./signupForm');
const displayPosts = require('./displayPosts');

module.exports = {
  notFoundError, serverError, signupFrom, displayPosts,
};
