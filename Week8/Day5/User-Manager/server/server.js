const express = require("express");
require("dotenv").config();
const cors = require("cors");
const user_router = require("./routes/users.routes.js");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/", user_router);
