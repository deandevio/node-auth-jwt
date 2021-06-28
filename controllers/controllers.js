const User = require("../models/User");
const { errorHandle } = require("../middleware/errorHandle");

exports.getHome = (req, res) => res.render("home");
exports.getSmoothies = (req, res) => res.render("smoothies");
exports.getSignup = (req, res) => res.render("signup");
exports.getLogin = (req, res) => res.render("login");
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
    console.log(error);
  }
};

exports.postSignup = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json({ sucess: true, user });
  } catch (error) {
    const errors = errorHandle(error);
    res.status(400).json({ errors });
  }
};

exports.deleteUsers = async (req, res) => await User.deleteMany();
