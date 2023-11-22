import {useState, useReducer} from 'react'


const initState = {
    result: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state, result: state.result +1}
        case 'MINUS':
            return {...state, result: state.result -1}
        case 'MULT':
            return {...state, result: state.result*2}
        case 'DIVIDE':
            return {...state, result: state.result/3}
        case 'CHANGE PAYLOAD':
            return {...state, value: Number(action.payload)}
        case 'INCREMENT_INPUT':
            return {...state, result: state.result+state.value}
        default:
            return {...state}
    }
}

const MathCalc = (props) => {
    const [result, setResult] = useState(0)
    const [state, dispatch] = useReducer(reducer, initState)
    console.log(state)

    return (
        <>
            <h2>Simple Calculator</h2>
            <button onClick={()=> dispatch({type: 'ADD'})}>Increment by 1</button>
            <button onClick={()=> dispatch({type: 'MINUS'})}>Decrement by 1</button>
            <button onClick={()=> dispatch({type: 'MULT'})}>Multiply by 2</button>
            <button onClick={()=> dispatch({type: 'DIVIDE'})}>Divide by 3</button>
            <input onChange={(e) => dispatch({type: 'CHANGE PAYLOAD', payload: e.target.value })}/>
            <button onClick={()=> dispatch({type: 'INCREMENT_INPUT'})}>Increment by input value</button>
            <h4>Result: {state.result}</h4>
        </>
    )
}

export default MathCalc

/*

const initState = {
    result: 0,
    users: [],
    customer: {}
}

const reducer = (state (initState), action) => {

}

action = {type: 'ADD_ONE'}
action = {type: 'MINUS_ONE'}

useReducer (reducer, initState)

*/