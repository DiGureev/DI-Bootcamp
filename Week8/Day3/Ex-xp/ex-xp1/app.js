const express = require("express");
require("dotenv").config();
const my_router = require("./routes/route.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

