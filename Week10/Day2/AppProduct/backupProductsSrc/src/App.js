import './App.css';
import Products from './components/Products.js';
import {Routes, Route} from 'react-router-dom'
import Product from './components/Product.js';

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
