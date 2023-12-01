import {useState, useEffect} from 'react'
import {useLocation, useParams, useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {getAllProducts, getOneProduct,editProduct, deleteProduct, productState} from "../features/productSlice.js"
import { useSelector, useDispatch } from "react-redux"

const Product = (props)=>{
    const data = useSelector(productState)
    
    const dispatch = useDispatch()

    const [inputs, setInputs] = useState({
        name: '',
        price: ''    })

    const params = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        dispatch(getOneProduct(params.id))
    }, [])

    const delProd = () =>{
        dispatch(deleteProduct(params.id))
        navigate('/', {state: {}})
    }

    const edtProd = () =>{
        let id = params.id;
        let name = inputs.name;
        let price = inputs.price;
        dispatch(editProduct({id,name,price}))
    }
    
    return (
        <>
            <h2>Product</h2>
            <form onSubmit={edtProd}>
                name: <input value={inputs.name} onChange={(e) => setInputs({...inputs, name:e.target.value})}/>
                price: <input value={inputs.price} onChange={(e) => setInputs({...inputs, price: e.target.value})}/>
                <input type='submit' value='Update'/>
            </form>
            <h2>Delete product:</h2>
            <button onClick={delProd}>Delete</button><br/>
            <div style={{
              display: "inline-block",
              padding: "20px",
              margin: "20px",
              border: "1px solid #000",
            }}>
                <h3>{data.name}</h3>
                <p>{data.price}</p>
                <Link to={`/`}>Back to Shop</Link>
            </div>

        </>
    )
}

export default Product