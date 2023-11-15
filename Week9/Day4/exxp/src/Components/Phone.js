import {useState} from 'react'

const Phone = () => {
    const [phone, setColor] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020,
    })

    return (
        <>
            <h2>My phone is {phone.brand}</h2>
            <p>It is {phone.color} {phone.model} from {phone.year}</p>
            <button onClick={() => setColor({...phone, color:'blue'})}>Change color</button>
        </>
        
    )
    
}

export default Phone