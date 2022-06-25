const Joi = require('joi').extend(require('@hapi/joi-date'));

const taskSchemas = Joi.object({
  title: Joi.string().min(8).required(),
  description: Joi.string().min(12).required(),
  dateTask: Joi.date().required().required(),
  duration: Joi.number().integer().required(),
});

module.exports = taskSchemas;
