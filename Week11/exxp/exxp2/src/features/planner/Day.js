import { useSelector} from "react-redux"
import {plannerState} from "./plannerSlice.js"
import Tasks from "./Tasks"

const Day = (props) => {
    const planner = useSelector(plannerState)

    return (
        <>
        {
            planner.map(item => {
                if (item.tasks.length > 0) {
                    return <div key={item.id}>
                            <h2>{item.id}</h2>
                            <Tasks tasks={item.tasks}/>
                        </div>
                }
                
            })
        }
        </>
    )
}

export default Day