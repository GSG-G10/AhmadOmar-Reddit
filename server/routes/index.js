const router = require('express').Router();
const { join } = require('path');
const { notFoundError, serverError } = require('../controllers');

router.get('/login', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
});

router.get('/signup', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'signup.html'));
});

router.use(notFoundError);
router.use(serverError);

module.exports = router;
