const books = [];

const getAllBook = (req, res) => {
    res.json(books);
  };

const addBook = (req, res) => {
console.log("body=>", req.body);
const new_book = { id: books.length + 1, ...req.body};
books.push(new_book);
res.status(201).json(books);
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const {title, chapter} = req.body;
    const indx = books.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    books[indx] = { ...books[indx], title: title, chapter: chapter,};
    res.json(books);
  };

const deleteBook = (req, res) => {
const { id } = req.params;
const task = books.filter((item) => item.id == id);
if (!task) return res.sendStatus(404);
books.splice(task, 1);
res.status(200).json("Deleted");
};

module.exports = {
    getAllBook,
    addBook,
    updateBook,
    deleteBook
}

