const express = require("express");
const router = express.Router();

const {
    getAllBook,
    addBook,
    updateBook,
    deleteBook
} = require("../controllers/books.controller.js")

router.get("/", getAllBook)
router.post("/", addBook)
router.put("/:id", updateBook)
router.delete("/:id", deleteBook)


module.exports = router;