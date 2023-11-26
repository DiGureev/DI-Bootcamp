import { useSelector, useDispatch} from "react-redux"
import { useState } from "react"
import {addTask} from './plannerSlice.js'

const AddTask = (props) =>{
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [display, setDisplay] = useState('none')

    const handleClick = () => {
        setDisplay('')
        dispatch(addTask({text, date}))
        setTimeout(()=>{
            setDisplay('none')
        }, 1000)
    }

    return (
        <>
        <input type="date" onChange={(e)=> setDate(e.target.value)}/>
        <input type="text" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={handleClick}>Add Task</button>
        <div style={{display: display}}>Added</div>
        </>
    )
}

export default AddTask