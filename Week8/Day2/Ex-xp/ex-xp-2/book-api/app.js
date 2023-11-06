const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
    console.log(`running on port 5000`);
  });

const books = [
    {
        id: 1,
        title: 'Harry Potter 1',
        author: 'JK Roling',
        publishedYear: 2001
    },
    {
        id: 2,
        title: 'Harry Potter 2',
        author: 'JK Roling',
        publishedYear: 2002
    },
    {
        id: 3,
        title: 'Harry Potter 3',
        author: 'JK Roling',
        publishedYear: 2003
    },
    
]

// /Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

app.get("/api/books", (req, res) => {
    res.json(books);
  });

//Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

app.get("/api/books/:bookId", (req, res) => {
    console.log("params=>", req.params);
    const { bookId } = req.params;
    const book = books.find((item) => item.id == bookId);
    if (!book) return res.status(404).json({ message: "Book Not Found" });
    res.json(book);
  });

//Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).

app.post("/api/books", (req, res) => {
    console.log("body=>", req.body);
    const newBook = { id: books.length + 1, ...req.body, };
    books.push(newBook);
    res.status(201).json(newBook);
  });