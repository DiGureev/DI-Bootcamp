import { useDispatch } from "react-redux"
import { useState } from "react"
import {editTask,removeTask} from './plannerSlice.js'

const Tasks = (props) => {
    const tasks = props.tasks
    const dispatch = useDispatch()
    const [display, setDisplay] = useState('none')
    const [newText, setNewText] = useState('')

    const handleClick= (element) => {
        setDisplay('none')
        dispatch(editTask({prev:element, newTask: newText}))
    }

    return (
        <>
        {
            tasks.map((item, index) => {
                    return <>
                            <p key={index}>{item}</p>
                            <button onClick={()=> setDisplay('')}>Edit</button>
                            <div style={{display: display}}>
                            <input onChange={(e)=>setNewText(e.target.value)}/>
                            <button onClick={()=>handleClick(item)}>Done</button>
                            </div>
                            <button onClick={()=> dispatch(removeTask(item))}>Remove</button>
                        </>
                })
            }
        </>
    )
}

export default Tasks