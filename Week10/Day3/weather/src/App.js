import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Search from './Components/Search';
import {useState, createContext} from 'react'
import Favorite from './Components/Favorite.js';

export const AppContext = createContext()

function App() {
  const [favorite, setFavorite] = useState([])

  return (
    <div className="App">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={'/favorite'}>My Fav</Link>
      </nav>
      <Routes>
        <Route path='/' element={<AppContext.Provider value={{favorite, setFavorite}}><Search/></AppContext.Provider>}/>
        <Route path='/favorite' element={<AppContext.Provider value={{favorite, setFavorite}}><Favorite/></AppContext.Provider>}/>
      </Routes>
    </div>
  );
}

export default App;
