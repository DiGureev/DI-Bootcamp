import {useContext} from 'react'
import {AppContext} from '../App.js'
import '../App.css'

const Toggle = (props) => {
    const {style, setStyle} = useContext(AppContext)

    const dark = {
        backgroundColor: 'grey',
        color: 'white'
      }
    const light = {
        backgroundColor: 'white',
        color: 'black'
    }

    const changeStyle= ()=> {
        if (style.backgroundColor == dark.backgroundColor) {
            setStyle(light)
        } else {
            setStyle(dark)
        }
    }

    return (
        <div style={{width: '50%', height: '50vh'}}>
        <h1>Change theme:</h1>
        <label class="switch">
        <input type="checkbox" onClick={changeStyle}/>
        <span class="slider round"></span>
        </label>
        </div>
    )
}

export default Toggle