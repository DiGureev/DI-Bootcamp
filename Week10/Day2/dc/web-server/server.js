const express = require("express");
require("dotenv").config();
const cors = require('cors')


const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});

app.get("/api/hello", (req, res) => {
  res.json('Hello From Express');
});

app.post("/api/world", (req, res) => {
  const {input} = req.body
  console.log(input)
  res.json(`I received your POST request. This is what you sent me: ${input}`);
});

/*
server
  |_ config - connection to database
  |_ models * - queries to database
  |_ controllers - function implementation code
  |_ routes - route implementation codes.

  .env
  middleware - function => request -> midlleware -> response
*/
