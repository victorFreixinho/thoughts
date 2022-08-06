const router = require("express").Router();
const DefaultController = require("../controllers/DefaultController");

router.get("/", DefaultController.home);

router.get("*", DefaultController.notFound);

module.exports = router;
