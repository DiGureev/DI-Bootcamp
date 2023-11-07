const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let users = [
  { id: 1, username: "Daniel", password: "123" },
  { id: 2, username: "Sam", password: "123223" },
  { id: 3, username: "Bam", password: "122323" },
];

app.get("/users", (req, res) => {
  res.status(200).json(users);
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const filteredUsers = users.filter((user) => user.username == username);
  if (filteredUsers.length > 0) {
    res.status(200).json({ message: "Username already exists.." });
  } else {
    users.push({ id: users.length + 1, username: username, password: password });
    res.status(201).json({ message: "User created successfully" });
  }
  res.status(200).json({ message: "Recieved Req on server" });
});

app.listen(3000, () => console.log("listening..."));
