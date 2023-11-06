const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
    console.log(`running on port 5000`);
  });

const fetchPosts = require('./data/dataService.js')

app.get("/api/dataF", async (req, res) => {
    const result = await fetchPosts()
    res.json(result)
  });