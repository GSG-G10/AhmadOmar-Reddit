const { notFoundError, serverError } = require('./error');
const signupFrom = require('./signupForm');
const displayPosts = require('./displayPosts');
const loginForm = require('./loginForm');
const userDashboard = require('./userDashboard');
const userPosts = require('./userPosts');
const userData = require('./userData');
const newPost = require('./newPost');
const singlePostData = require('./singlePostData');
const singlePost = require('./singlePost');

module.exports = {
  notFoundError,
  serverError,
  signupFrom,
  displayPosts,
  loginForm,
  userDashboard,
  userPosts,
  userData,
  newPost,
  singlePostData,
  singlePost,
};
