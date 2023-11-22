const initState = {
    days: []
}

{/* console.log(new Date(e.target.value) < new Date('2023-11-14'))}/>
array.sort(function(a,b){
// Turn your strings into dates, and then subtract them
// to get a value that is either negative, positive, or zero.
return new Date(b.date) - new Date(a.date);
}); */}

export const plannerReducer = (state = initState, action) => {
    let dayArr = [...state.days];

    let curDay = dayArr.findIndex(item => item.date === action.date)

    switch(action.type) {
        case 'planner/add':
            if (curDay === -1) {
                dayArr.push({date: action.date, tasks: [action.task]})
            } else {
                let newObj = {...dayArr[curDay]}
                console.log(newObj)
                let newTasksList = [...newObj.tasks]
                console.log(newTasksList)
                newTasksList.push(action.task)
                newObj = {...dayArr[curDay], tasks: newTasksList}
                dayArr[curDay] = newObj
                console.log(dayArr)
            }
            return {...state, days: dayArr.sort(function(a,b){return new Date(a.date).getTime() - new Date(b.date).getTime()})}

         case 'planner/update':
            let generalObj = {...dayArr[curDay]}
            let newTasksList = [...generalObj.tasks]
            let taskInd = newTasksList.findIndex(item => item === action.task)
            newTasksList[taskInd] = action.newTask
            let newObj = {...dayArr[curDay], tasks: newTasksList}
            dayArr[curDay] = newObj
            
            return {...state, days: dayArr}

        case 'planner/deleteDay':
            dayArr.splice(curDay, 1)
            return {...state, days: dayArr}
            
        case 'planner/deleteTask':
            let BigObj = {...dayArr[curDay]}
            let BigTasksList = [...BigObj.tasks]
            let Indx = BigTasksList.findIndex(item => item === action.task)
            BigTasksList.splice(Indx,1)
            let editObj = {...dayArr[curDay], tasks: BigTasksList}
            dayArr[curDay] = editObj

            return {...state, days: dayArr}

            default:
                return {...state}
        }
}