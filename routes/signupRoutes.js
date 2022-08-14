const router = require("express").Router();
SignupController = require("../controllers/SignupController");

console.log(SignupController);

router.get("/", SignupController.showSignupPage);

module.exports = router;
