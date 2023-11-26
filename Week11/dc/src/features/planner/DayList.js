import Tasks from "./Tasks"

const DayList = (props) => {
    const list = props.planner
    const date = props.date

    if (date === '') {
        return <div>Choose the date first</div>
    } else {
        return (
            <>
        {
            list.map(item => {
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
    
}

export default DayList