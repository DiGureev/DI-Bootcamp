import {useState} from 'react'
import Garage from './Garage.js';

const CarInfo = (props) => {
    const {model} = props;
    const [color, setColor] = useState('red')

    return (
    <>
    <p>This car is {color} {model}</p>
    <Garage size='small'/>
    </>
    )
}

export default CarInfo