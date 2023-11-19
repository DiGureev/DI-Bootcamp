import {useState} from 'react'

const BuggyCounter = () => {
    const [counter, setCount] = useState(0)

    const handleClick = () => {
        setCount(counter+1) 
    }

    if (counter > 4) {
        throw new Error ('I crashed!!!')
    }

    return (
        <div onClick={handleClick}>{counter}</div>
    )
}

export default BuggyCounter