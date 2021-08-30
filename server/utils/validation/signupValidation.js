const joi = require('joi');

const signupSchema = joi.object({
  username: joi.string().pattern(new RegExp('^[A-Za-z][A-Za-z0-9_]{7,18}$')).required(),
  email_address: joi.string().email().required(),
  password: joi.string().alphanum().min(6).required(),
  confirmpassword: joi.ref('password'),
});

module.exports = signupSchema;
