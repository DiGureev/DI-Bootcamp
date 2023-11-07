const express = require("express");
require("dotenv").config();
const cors = require("cors");
const my_router = require("./routes/quiz.route.js");

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/quiz", my_router);

// app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

