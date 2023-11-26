import { createSlice } from "@reduxjs/toolkit";

const initState = {
    planner:[]
};

export const plannerSlice = createSlice({
    name: 'planner',
    initialState: initState,
    reducers: {
        addTask: (state, action)=> {
            console.log(String(new Date(action.payload.date)).slice(0,15))
            let indx = state.planner.findIndex(item => item.id == String(new Date(action.payload.date)).slice(0,15))
            console.log(indx)
            if (indx !== -1) {
                let indx = state.planner.findIndex(item => item.id == String(new Date(action.payload.date)).slice(0,15))
                state.planner[indx].tasks.push(action.payload.text)
            } else if((indx === -1)) {
                state.planner.push({id: String(new Date(action.payload.date)).slice(0,15), tasks: [action.payload.text]})

            }
            
            return state
        },
        editTask: (state, action)=> {
            let indx = state.planner.findIndex(item => item.tasks.includes(action.payload.prev))
            let task = state.planner[indx].tasks.findIndex(item=> item == action.payload.prev)
            state.planner[indx].tasks.splice(task,1,action.payload.newTask)
            return state
        },
        removeTask: (state, action)=> {
            let indx = state.planner.findIndex(item => item.tasks.includes(action.payload))
            state.planner[indx].tasks = state.planner[indx].tasks.filter(item => item != action.payload)
            return state
        },
        
    }
})

export const {addTask, editTask,removeTask} = plannerSlice.actions
export default plannerSlice.reducer

export const plannerState = (state)=> state.planner.planner

