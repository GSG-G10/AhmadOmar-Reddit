const joi = require('joi');

const loginSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().min(6).required(),
});

module.exports = loginSchema;
