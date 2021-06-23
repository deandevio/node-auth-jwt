const express = require("express");
const router = express.Router();
const { getHome, getSmoothies } = require("../controllers/controllers");

router.route("/").get(getHome);
router.route("/smoothies").get(getSmoothies);

module.exports = router;
