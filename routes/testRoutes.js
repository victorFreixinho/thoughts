const router = require("express").Router();
const TestController = require("../controllers/TestController");

router.get("/", TestController.test);

module.exports = router;
