const Joi = require("joi");
const patientSchema = Joi.object({
  firstname: Joi.required(),
  lastname: Joi.required(),
  mobile: Joi.number().integer().min(0).required(),
});
module.exports = patientSchema;
