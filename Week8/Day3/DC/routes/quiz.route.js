const express = require("express");
const router = express.Router();

const {
    getQuestions,
    getAnswer,
    getScore,
} = require("../controllers/quiz.controller.js")

router.get("/", getQuestions)
router.post("/", getAnswer)
router.get("/score", getScore)

module.exports = router;