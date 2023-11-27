import { useSelector, useDispatch } from "react-redux"
import {ageUpAsync ,ageDownAsync , ageState,loading} from './ageSlice.js'
import logo from '../logo.svg';


const Age = (props) => {
    const age = useSelector(ageState)
    const load = useSelector(loading)
    const dispatch = useDispatch()

    const showAge = () => {
        while (load) {
            <div><img src={logo} className="App-logo" alt="logo" /></div>
        }
        return <div>{age}</div>

    }

    return (
        <div>
            <h2>Age</h2>
            <div>
                {load ? (
                <img src={logo} className="App-logo" alt="logo" />) : (
                    <div className="ageDiv">{age} </div>
                )}
            </div>
            <button onClick={()=> dispatch(ageUpAsync(age))}>+</button>
            <button onClick={()=> dispatch(ageDownAsync(age))}>-</button>
        </div>
    )

}

export default Age