import {useSelector, useDispatch} from 'react-redux'
import {remove, changeStatus} from '../Redux/actions.js'
import {useRef} from 'react'

const ShowAllTask = (props) => {
    const todoList = useSelector(state => state.todoReducer.listOftodos)
    const dispatch = useDispatch()

    const checkValue = (e, index) => {
        if (e.target.checked === false) {
            dispatch(changeStatus('Not Done', index))
        } else {
            dispatch(changeStatus('Done', index))
        }
    }

    if (todoList.length > 0){
         return (
            todoList.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.date.slice(0,10)}</p>
                        <p>{item.status}</p><input type='checkbox' onClick={(e) => checkValue(e, item.id)}/>
                        <p>{item.text}</p>
                        <button onClick={() => dispatch(remove(item.id))}>Remove</button>
                    </div>
                )
            })
    )
    } else {
        return <h3>Start to create Tasks</h3>
    }
}

export default ShowAllTask