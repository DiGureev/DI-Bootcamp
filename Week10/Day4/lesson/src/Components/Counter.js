import {useState} from 'react'
import {connect} from 'react-redux'

const Counter = (props) => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            Value: {counter} <button onClick={()=> {setCounter(counter+1)}}>Increment</button>
        </div>
    )
}

export default Counter