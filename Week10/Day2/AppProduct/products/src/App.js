import './App.css';
import Products from './Components/Products.js';
import {Routes, Route} from 'react-router-dom'
import Product from './Components/Product.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/:id' element={<Product/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
