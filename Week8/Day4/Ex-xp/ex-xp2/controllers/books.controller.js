const {
  _getAllBooks,
  _getBookById,
  _createBook

} = require("../models/books.model.js")


const getAllBooks = async (req, res) => {
  try{
    const data = await _getAllBooks()
    if (data.length === 0){
      res.json('No books')
    } else{
      res.json(data);
    }
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No books"});
  }
};

const getBookById = async (req, res) => {
  try{
    const {id} = req.params
    const data = await _getBookById(id)
    if (data.length === 0){
      res.status(404).json('Book not found')
    } else{
      res.status(200).json(data);
    }
  }catch (e) {
    console.log(e)
    res.status(404).json({msg: "No posts"});
  }
};

const createBook = async (req, res) => {
    try{
      console.log(req.body);
      const {title, author, publishedyear} = req.body;
      const data = await _createBook(title, author, publishedyear);
      getAllBooks(req,res);
    }catch (e) {
      console.log(e)
      res.status(404).json({msg: "Can not add the post"});
    }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook
};
