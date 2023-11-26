import {useDispatch} from 'react-redux'
import {toggleTodo,removeTodo} from './todoSlice.js'


const TodoItem = (props) => {
    console.log(props)
    const dispatch = useDispatch()

    const handleChackbox = (e) => {
        if (e.target.checked) {
            dispatch(toggleTodo({id: props.id, complete: true}))
        } else {
            dispatch(toggleTodo({id: props.id, complete: false}))
        }
    }

    return(
        <>
        <h3>{props.task}</h3>
        <input type='checkbox' onClick={(e)=> handleChackbox(e)}/>
        <button onClick={()=> dispatch(removeTodo(props.id))}>Remove Task</button>

        </>
    )
}

export default TodoItem