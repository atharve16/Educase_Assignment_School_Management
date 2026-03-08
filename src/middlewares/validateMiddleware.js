const Joi = require("joi");

exports.validateSchool = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required(),
    address: Joi.string().required(),
    latitude: Joi.number().required(),
    longitude: Joi.number().required()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message
    });
  }

  next();
};