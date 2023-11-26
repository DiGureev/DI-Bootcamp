import { useSelector, useDispatch} from "react-redux"
import { useState } from "react"
import {addTask} from './plannerSlice.js'

const AddTask = (props) =>{
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    return (
        <>
        <input type="date" onChange={(e)=> setDate(e.target.value)}/>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=> dispatch(addTask({text, date}))}>Add Task</button>
        </>
    )
}

export default AddTask