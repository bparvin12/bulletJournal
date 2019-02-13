const express = require('express');
const router = require('express-promise-router')();

const tasksController = require("../controllers/tasksController");

// == Task Routes =============================================================
// ============================================================================

// Matches with "/tasks/"
router.route("/")
  .get(tasksController.findAll)
  .post(tasksController.create);

router.route("/date/:date")
  .get(tasksController.findByDate)
  .post(tasksController.create);

// Matches with "/tasks/:id"
router.route("/:id")
  .get(tasksController.findById)
  .put(tasksController.update)
  .delete(tasksController.remove);

// Matchess with "/tasks/:date"
// router.route("/:date")


module.exports = router;

