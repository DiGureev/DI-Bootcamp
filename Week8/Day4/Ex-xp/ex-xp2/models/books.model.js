const {db} = require("../config/db.js")

const _getAllBooks = () => {
    return db("books").select('id', 'title', 'author','publishedyear');
}

const _getBookById = (id) => {
    return db("books").select('id', 'title', 'author','publishedyear').where({id});
}

const _createBook = (title, author, publishedyear) => {
    return db("books").insert({title, author, publishedyear}, ['id', 'title', 'author','publishedyear'])
}

module.exports = {
    _getAllBooks,
    _getBookById,
    _createBook
    
}