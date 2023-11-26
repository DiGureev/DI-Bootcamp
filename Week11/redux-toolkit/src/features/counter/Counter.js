import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset,incrementByAmount, incrementWithPrepare } from "./counterSlice.js"
import { useState } from "react"
import {counterState} from './counterSlice.js'

const Counter = (props) => {
    const count = useSelector(counterState)
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    return (
        <>
            <p>count state {count}</p>
            <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
            <input onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>dispatch(incrementByAmount(num))}>increment By Amount</button><br/>
            <button onClick={()=>dispatch(incrementWithPrepare(1,5,100))}>With Prepare</button>

            </div>
        </>
    )
}

export default Counter