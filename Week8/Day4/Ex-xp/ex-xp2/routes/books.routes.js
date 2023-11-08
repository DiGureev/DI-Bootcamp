const express = require("express");
const {
  getAllBooks,
  getBookById,
  createBook
} = require("../controllers/books.controller.js");

const router = express.Router();

router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.post("/", createBook);


module.exports = router;
