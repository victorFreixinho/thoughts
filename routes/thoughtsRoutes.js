const router = require("express").Router();
const ThoughtsController = require("../controllers/ThoughtsController");

router.get("/", ThoughtsController.getAllThoughts);
router.post("/add", ThoughtsController.addThought);
// It's not easy to do delete/put with just html (handlebars).
// So it was preferred to use get/post
router.get("/delete/:id", ThoughtsController.deleteThought);
router.post("/update", ThoughtsController.updateThought);

module.exports = router;
