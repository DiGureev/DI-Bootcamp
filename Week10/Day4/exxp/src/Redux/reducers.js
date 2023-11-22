const initState = {
    listOftodos: []
}

export const todoReducer = (state = initState, action) => {
    const newTodo = [...state.listOftodos]
    let index = newTodo.findIndex(item => item.id == action.id) 
   
    console.log(action)

    switch(action.type) {
        case 'todo/add':
            newTodo.push({id: newTodo.length +1, date: new Date(Date.now()).toString(), status: action.status, text: action.payload})
            return {...state, listOftodos: newTodo}

        case 'todo/status':
            let newArr = [...newTodo]
            let obj = {...newArr[index], status: action.status}
            newArr[index] = obj
            return {...state, listOftodos: newArr}
            
        case 'todo/remove':
            newTodo.splice(index, 1)
            return {...state, listOftodos: newTodo}
        default:
            return {...state}
    }
}