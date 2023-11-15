import {useState} from 'react'

const Event = () => {
    const [isToggleOn, setState] = useState('ON')
    let state = 'ON'

    // const clickMe = () => {
    //     alert('I was clicked!')
    // }

    // const handleKeyDown = (e) => {
    //     if (e.key == 'Enter'){
    //         alert(`The Enter key was pressed, your input: ${e.target.value}`)
    //         e.target.value = ''
    //     }
    // }

    const switchTog = () => {
        if (isToggleOn == 'ON') {
            console.log('i am here in true')
            setState('OFF')
        } else {
            console.log('i am here in false')
            setState('ON')
        }
        
    }

    // return (
    //     <>
    //         <button onClick={()=> clickMe()}>Click me</button><br/>
    //         <input onKeyDown={(e) => handleKeyDown(e)}/>
    //     </>
    // )

    return (
        <>
            <h2>Exersice 3</h2>
            <button onClick={()=> switchTog()}>{isToggleOn}</button><br/>
        </>
    )

}

export default Event


