import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

const Product = (props)=>{
    const [prod, setProduct] = useState('')
    const [inputs, setInputs] = useState({
        name: '',
        price: ''    })
    const params = useParams()

    const product = async (id) => {
        try {
          const res = await fetch(`http://localhost:3005/api/products/${id}`);
          const data = await res.json();
          //   console.log(data);
          setProduct(data[0]);
        } catch (e) {
          console.log(e);
        }
      };

    useEffect(()=>{
        product(params.id)
        console.log(prod)
    }, [])

    const updateProduct = async(e) =>{
        let name = inputs.name;
        let price = inputs.price;

        console.log(name.price)
        try {
            e.preventDefault()
            let res = await fetch(`http://localhost:3005/api/products/${params.id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({name, price}),
        });
            let data=await res.json();
            setProduct(data[0]);
        } catch (e) {
            console.log(e);
        }
    }
    
    return (
        <>
            <h2>Product</h2>
            <form onSubmit={(e) => updateProduct(e)}>
                name: <input onChange={(e) => setInputs({...inputs, name:e.target.value})}/>
                price: <input onChange={(e) => setInputs({...inputs, price: e.target.value})}/>
                <input type='submit' value='Update'/>
            </form>
            <div style={{
              display: "inline-block",
              padding: "20px",
              margin: "20px",
              border: "1px solid #000",
            }}>
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <Link to={`/`}>Back to Shop</Link>
            </div>

        </>
    )
}

export default Product