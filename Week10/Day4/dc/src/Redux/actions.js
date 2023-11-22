export const add = (date, task) => {
    return {
        type: 'planner/add',
        date,
        task,
    }
}

export const update = (date, task, newTask) => {
    return {
        type: 'planner/update',
        date,
        task,
        newTask
    }
}

export const removeDay = (date) => {
    return {
        type: 'planner/deleteDay',
        date
    }
}

export const removeTask = (date, task) => {
    return {
        type: 'planner/deleteTask',
        date,
        task
    }
}