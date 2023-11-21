import { useContext } from "react"
import {AppContext} from "../App.js"


const ShowCounter = (props) => {
    const {count} = useContext(AppContext)
    return(
        <>
        <p>Show Counter:</p>
        <div>Count: {count}</div>
        </>
    )
}

export default ShowCounter