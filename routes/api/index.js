const router = require("express").Router();
const contentController = require("../../controllers/contentController");

// Matches with "/api/books"
router.route("/")
  .get(contentController.findAll)
  .post(contentController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

module.exports = router;
