import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {addTodo} from './todoSlice.js'

const AddTodo = (props) => {
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    return (
        <>
        <input value={input} onChange={(e)=> setInput(e.target.value)}/>
        <button onClick={()=> dispatch(addTodo({task: input, complete: false}))}>Add</button>
        </>
    )
}

export default AddTodo