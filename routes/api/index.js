const router = require("express").Router();
const contentController = require("../../controllers/contentController");


router.route("/")
  .get(contentController.findAll)
  .post(contentController.create);
  

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(contentController.findById)
  .delete(contentController.remove);

module.exports = router;
