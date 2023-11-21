import {useState, useRef} from 'react'

const Count = (props) => {
    const [length, setLength] = useState(0)
    const inputRef = useRef('')

    const change = () => {
        setLength(inputRef.current.value.length)
    }

    return(
        <>
        <h2>Your input length: {length}</h2>
        <textarea placeholder='Type something...' ref={inputRef} onChange={change}></textarea>
        </>
    )
}

export default Count