const { Router } = require("express");
const router = Router();
const { getHome, getSmoothies, getSignup, getLogin, postLogin, postSignup } = require("../controllers/controllers");

router.route("/").get(getHome);
router.route("/smoothies").get(getSmoothies);
router.route("/signup").get(getSignup).post(postSignup);
router.route("/login").get(getLogin).post(postLogin);

module.exports = router;
