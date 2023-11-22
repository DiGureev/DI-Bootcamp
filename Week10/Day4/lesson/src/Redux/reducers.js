

const initState = {
    value: 0,
}

export const counterReducer = (state = initState, action) => {
    switch(action.type) {
        case 'counter/increment':
            return {...state, value: state.value+1}
        default:
            return {...state}
    }
}