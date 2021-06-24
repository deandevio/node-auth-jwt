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

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.statics.login = async function (email, password, next) {
  const user = await this.findOne({ email });
  if (user) {
    bcrypt.compare(password, user.password, function (err, res) {
      // res === true
    });
  }
  throw Error("Incorrect email");
};

const User = model("user", userSchema);

module.exports = User;
