const router = require("express").Router();
const LoginController = require("../controllers/LoginController");

router.get("/", LoginController.showLoginPage);

module.exports = router;
