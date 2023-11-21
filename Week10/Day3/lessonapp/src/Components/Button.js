import { useContext } from "react"
import {AppContext} from "../App.js"

const Button = (props) => {
    const {count, setCount} = useContext(AppContext)
    return(
        <>
        <button onClick={()=> setCount(count+1)}>+1</button>
        </>
    )
}

export default Button