const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "You must enter a correct email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password should be 8 minimum characters"],
  },
});

const User = model("user", userSchema);

module.exports = User;
