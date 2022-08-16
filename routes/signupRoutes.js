const router = require("express").Router();
SignupController = require("../controllers/SignupController");

router.get("/", SignupController.showSignupPage);

module.exports = router;
