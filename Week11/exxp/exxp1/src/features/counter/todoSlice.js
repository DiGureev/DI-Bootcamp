import { createSlice } from "@reduxjs/toolkit";

const initState = {
    todos:[]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initState,
    reducers: {
        addTodo: (state, action)=> {
            console.log(action)
            state.todos.push({id: state.todos.length+1, task: action.payload.task, complete: action.payload.complete})
            return state
        },
        toggleTodo: (state, action)=> {
            console.log(action)
            let indx = state.todos.findIndex(item => item.id == action.payload.id)
            console.log(indx)
            state.todos[indx].complete = action.payload.complete
            return state
        },
        removeTodo: (state, action)=> {
            console.log(action)
            state.todos = state.todos.filter(item => item.id != action.payload)
            return state
        },
        
    }
})

export const {addTodo, toggleTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer

export const todoState = (state)=> state.todo.todos