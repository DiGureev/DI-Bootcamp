import {useState} from 'react'

const Counter = (props) => {
    const [inputValue, setValue] = useState('Enter a value')

    return (
            <>
            <h1>Counter</h1>
            <div>
                <h2>{inputValue}</h2>
                <input onChange={(event)=> setValue(event.target.value)}/>
            </div>
            </>
    )
}

export default Counter