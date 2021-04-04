const validator = require("validator");

module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};

  if (username.trim() === "") {
    errors.username = "Username must not be empty";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email must be valid";
  }
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (password !== confirmPassword) {
    errors.password = "Passwords must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (email, password) => {
  if (email.trim() === "") {
    errors.email = "Email must not be empty";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email must be valid";
  }
  if (password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else if (password !== confirmPassword) {
    errors.password = "Passwords must match";
  }
};
