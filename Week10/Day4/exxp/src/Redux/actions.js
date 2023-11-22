export const add = (payload, status='Not Done') => {
    return {
        type: 'todo/add',
        status,
        payload,
    }
}

export const changeStatus = (status, id) => {
    return {
        type: 'todo/status',
        status,
        id
    }
}

export const remove = (id) => {
    return {
        type: 'todo/remove',
        id
    }
}