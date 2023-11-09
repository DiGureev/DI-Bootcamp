const express = require("express");
const {
  getAllUsers,
  getUserById,
  UpdateUser,
  registerUser,
  loginUser
} = require("../controllers/users.controller.js");

const router = express.Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/users/:id", UpdateUser);

module.exports = router;
