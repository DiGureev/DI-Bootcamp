const express = require("express");
require("dotenv").config();
const post_router = require("./routes/posts.routes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/api/posts", post_router);
