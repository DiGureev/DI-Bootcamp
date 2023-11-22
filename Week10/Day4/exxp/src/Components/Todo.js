import {useSelector, useDispatch} from 'react-redux'
import {add, remove, changeStatus} from '../Redux/actions.js'
import {useRef} from 'react'
import ShowAllTask from './ShowAllTask.js'

const Todo = (props) => {
    const todoList = useSelector(state => state.todoReducer.listOftodos)
    const dispatch = useDispatch()
    const task = useRef('')


    return (
        <>
        <h1>Your Todo</h1>
        <div>
            <input type='text' ref={task}/>
            <button onClick={() => dispatch(add(task.current.value))}>Add</button>
        </div>
        <h2>Here is what you have to do:</h2>
        <ShowAllTask/>
        </>
    )
}

export default Todo