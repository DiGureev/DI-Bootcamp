import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {Link} from "react-router-dom"
import {getAllProducts, searchProducts,addProduct, productState} from "../features/productSlice.js"

const Products = (props) => {
  const data = useSelector(productState)
  console.log('data',data)
  const dispatch = useDispatch()
  
  const [clicked, setClicked] = useState(false);
  const [searchProduct, setSearch] = useState([]);
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);


  useEffect(() => {
    console.log('clicked=>',clicked, 'props.refresh=>',props.refresh);
    if (clicked || props.refresh) dispatch(getAllProducts());
  }, [clicked,props.refresh]);


  const addProd = (e)=>{
    e.preventDefault()
    dispatch(addProduct({name,price}))
  }

  return (
    <>
      <h1>Shop</h1><br/>
      <div>
      <input onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={()=>dispatch(searchProducts(searchProduct))}>Search</button><br/>
      </div>
      <div>
        <form onSubmit={addProd}>
          name: <input onChange={(e) => setName(e.target.value)}/>
          price: <input onChange={(e) => setPrice(e.target.value)}/>
          <input type='submit' value='Add'/>
        </form>
      </div>
        {
    
        data.map((item) => {
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
