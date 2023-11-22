const initState = {
    days: []
}

export const plannerReducer = (state = initState, action) => {
    let tasksArr = [...state.days]
    let indx = tasksArr.findIndex(item => item.date == action.date)
    
    switch(action.type) {
        case 'planner/add':
            
            if (indx === -1) {
                tasksArr.push({id: tasksArr.length +1, date: action.date, tasks: [...tasks, {id: tasks.length +1, task: action.task}]})
            } else {
                tasksArr[indx].tasks.push(action.task)
            }
            newTodo.push({id: newTodo.length +1, date: action.date, status: action.status, text: action.payload})
            return {...state, days: tasksArr}

         case 'planner/update':
            tasksArr[indx].tasks[action.id] = action.task
            return {...state, days: tasksArr}

        case 'planner/deleteDay':
            tasksArr.splice(indx, 1)
            return {...state, days: tasksArr}
            
        case 'planner/deleteTask':
            let TaskIndex = tasksArr[indx].tasks.filter(elem => elem.id === action.id)
            tasksArr[indx].tasks.splice(TaskIndex, 1)
            return {...state, days: tasksArr}

            default:
                return {...state}
        }
}