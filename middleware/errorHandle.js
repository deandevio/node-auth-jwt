exports.errorHandle = (err) => {
  console.log(err.message, err.code);

  let errors = { email: "", password: "" };

  if (err.code === 11000) {
    errors.email = "this email already exists";
    errors.password = "";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};
