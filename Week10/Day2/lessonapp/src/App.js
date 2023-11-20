import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>{" "}
        <Link to='/about'>About</Link>{" "}
        <Link to='/contact'>Contact</Link>
      </nav>
        <Routes>
          <Route path='/homepage' element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/about/:id' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
