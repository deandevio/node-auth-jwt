exports.getHome = (req, res) => res.render("home");
exports.getSmoothies = (req, res) => res.render("smoothies");
exports.getSignup = (req, res) => res.render("signup");
exports.getLogin = (req, res) => res.render("login");
exports.postSignup = (req, res) => res.send("new signup");
exports.postLogin = (req, res) => res.send("new login");
