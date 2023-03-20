// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  console.log(`🖥 ~ file: validation.js:8 ~ handleValidationErrors ~ validationErrors:`, validationErrors)



  if (!validationErrors.isEmpty()) {
    const errors = {};
    validationErrors
      .array()
      .forEach(error => errors[error.param] = error.msg);

    const err = Error("Bad request.");
    err.errors = errors;
    err.status = 400;
    if(err.errors.email === "Email already exists"){
      err.status = 403;
    }
    err.title = "Bad request.";
    console.log(`🖥 ~ file: validation.js:19 ~ handleValidationErrors ~ err:`, err)
    next(err);
  }
  next();
};

module.exports = {
  handleValidationErrors
};
