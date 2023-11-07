const express = require("express");
const router = express.Router();

const {
    getAllToDo,
    addTask,
    updateTask,
    deleteTask
} = require("../controllers/todo.controller.js")

router.get("/", getAllToDo)
router.post("/", addTask)
router.put("/:id", updateTask)
router.delete("/:id", deleteTask)


module.exports = router;