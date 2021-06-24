const { Router } = require("express");
const router = Router();
const { getHome, getSmoothies, getSignup, getLogin, postLogin, postSignup, deleteUsers } = require("../controllers/controllers");

router.route("/").get(getHome);
router.route("/smoothies").get(getSmoothies);
router.route("/signup").get(getSignup).post(postSignup);
router.route("/login").get(getLogin).post(postLogin);
router.route("/delete").get(deleteUsers);

module.exports = router;
