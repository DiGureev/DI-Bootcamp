import Header from './components/Header.js';
import {useState, createContext } from 'react'
import Book from './components/Book.js';
import BookListGenerator from './components/BookList.js';
import './App.css'

export const AppContext = createContext()

function App() {
  const [BookList, setBooks] = useState([])
  return (
    <div className="App">
      <Header/>
      <AppContext.Provider value={{BookList, setBooks}}>
      <Book/>
      {console.log(BookList)}
      <BookListGenerator />
      </AppContext.Provider>
    </div>
  );
}

export default App;
