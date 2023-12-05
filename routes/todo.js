const express = require("express");
const router = express.Router();
const {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

router.route("/todo").post(addTodo).get(getTodo);
router.route("/todo/:id").delete(deleteTodo).patch(updateTodo);

module.exports = router;
