import {useState, useEffect} from 'react';
import axios from 'axios'


const Home = (props) => {
    const [products, setProducts] = useState()

    useEffect (() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            const response = await axios.get("http://localhost:3001/products/all");
            if(response.status === 200) setProducts(response.data);
        } catch (err){
            console.log(err)
        }
    }
    return (
        <div>
            <h2>Homepage</h2>
            {products&&
                products.map((item) => {
                    return <div key={item.id}>{item.name}</div>
                })}
        </div>
    );
};

export default Home