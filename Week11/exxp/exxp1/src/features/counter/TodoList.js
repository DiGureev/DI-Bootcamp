import { useSelector } from "react-redux"
import TodoItem from "./TodoItem.js"
import AddTodo from "./AddTodo.js"
import {todoState} from './todoSlice.js'


const TodoList = (props) => {
    const todos = useSelector(todoState)
    return (
        <>
            <AddTodo/>
            {
                todos.map(item => {
                   return <TodoItem task={item.task} id={item.id} complete={item.complete} key={item.id}/>
                })
            }

        </>
    )
}

export default TodoList