const express = require("express");
require("dotenv").config();
const book_router = require("./routes/books.routes.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.use("/api/books", book_router);
