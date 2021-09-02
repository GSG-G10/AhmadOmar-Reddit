const router = require('express').Router();
const { join } = require('path');
const { notFoundError, serverError } = require('../controllers');
const { signupFrom } = require('../controllers');
const { displayPosts } = require('../controllers');
const { loginForm } = require('../controllers');
const authCheck = require('../utils/authCheck');
const { userDashboard } = require('../controllers');
const { userPosts } = require('../controllers');
const { userData } = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
});

router.get('/userPosts', userPosts);
router.get('/userData', userData);
router.get('/dashboard', authCheck, userDashboard, (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'dashboard.html'));
});

router.get('/displayPosts', displayPosts);
router.post('/signup', signupFrom);
router.post('/login', loginForm);

router.use('/logout', (req, res) => {
  res.clearCookie('token').clearCookie('is_admin').clearCookie('userName').redirect('/');
});

router.use(notFoundError);
router.use(serverError);

module.exports = router;
