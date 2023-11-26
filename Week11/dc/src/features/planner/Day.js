import { useSelector, useDispatch} from "react-redux"
import {plannerState} from "./plannerSlice.js"
import {useState} from 'react'
import {showTasks} from './plannerSlice.js'
import DayList from "./DayList.js"

const Day = (props) => {
    const planner = useSelector(plannerState)
    const dispatch = useDispatch()
    const [date, setDate] = useState('')

    return (
        <>

        <h2>Choose the day to see tasks</h2>
        <input type="date" onChange={(e)=>setDate(e.target.value)}/>
        <button onClick={()=>dispatch(showTasks(date))}>Show</button>
        <DayList planner={planner} date={date}/>
        </>
    )
}

export default Day