import { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchProduct, setSearch] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    console.log('clicked=>',clicked, 'props.refresh=>',props.refresh);
    if (clicked || props.refresh) all();
  }, [clicked,props.refresh]);

  const all = async () => {
    try {
      const res = await fetch("http://localhost:3005/api/products");
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:3005/api/products/search?name=${searchProduct}`);
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  }

  const addProduct = async(e) =>{
    e.preventDefault()

    let res = await fetch("http://localhost:3005/api/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({name, price}),
        });
    let data=await res.json();
    setProducts(data[0]);
  }

  


  return (
    <>
      <h1>Shop</h1><br/>
      <div>
      <input onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={handleSearch}>Search</button><br/>
      </div>
      <div>
        <form onSubmit={addProduct}>
          name: <input onChange={(e) => setName(e.target.value)}/>
          price: <input onChange={(e) => setPrice(e.target.value)}/>
          <input type='submit' value='Add'/>
        </form>
      </div>
      {products.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              display: "inline-block",
              padding: "20px",
              margin: "20px",
              border: "1px solid #000",
            }}>
            <h4>{item.name}</h4>
            <h5>{item.price}$</h5>
            <Link to={`/${item.id}`}>Buy Now</Link>
          </div>
        );
      })}<br/>
      <button onClick={()=>setClicked(true)}>Reset clicked to true</button>
    </>
  );
};
export default Products;
