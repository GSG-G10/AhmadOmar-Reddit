const router = require('express').Router();
const { notFoundError, serverError } = require('../controllers');

router.use(notFoundError);
router.use(serverError);

module.exports = router;
