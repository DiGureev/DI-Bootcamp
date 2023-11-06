const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', express.static(__dirname + '/'));

app.listen(5000, () => {
  console.log(`running on port 5000`);
});

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
];



const randEmoji = emojis[(Math.floor(Math.random() * emojis.length))]

app.get("/api/emojis", (req, res) => {
  res.json(emojis);
});

// app.post("/:word", (req, res) => {
//   console.log("body=>", req.body);
//   const {word} = req.body;
//   let newList = emojis.find(item => item.name = word)
//   res.json(newList);
// });
