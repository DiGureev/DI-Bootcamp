const express = require("express");
const {
  getAllTasks,
  getTaskById,
  addTask,
  UpdateTask,
  DeleteTask
} = require("../controllers/task.controller.js");

const router = express.Router();

router.get("/", getAllTasks);
router.get("/:id", getTaskById);
router.post("/", addTask);
router.put("/:id", UpdateTask);
router.delete("/:id", DeleteTask);


module.exports = router;
