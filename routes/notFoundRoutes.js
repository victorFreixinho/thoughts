const router = require("express").Router();
const NotFoundController = require("../controllers/NotFoundController");

router.get("/", NotFoundController.notFound);

module.exports = router;
