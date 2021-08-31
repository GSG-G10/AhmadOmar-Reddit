const router = require('express').Router();
const { join } = require('path');
const { notFoundError, serverError } = require('../controllers');
const { signupFrom } = require('../controllers');
const { displayPosts } = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
});

router.get('/displayPosts', displayPosts);
router.post('/signup', signupFrom);

router.use(notFoundError);
router.use(serverError);

module.exports = router;
