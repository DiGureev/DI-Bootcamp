const express = require("express");
require("dotenv").config();
const cors = require("cors");
const task_router = require("./routes/task.routes.js");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/tasks", task_router);
