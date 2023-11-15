import {useState} from 'react'

const Forms = ()=>{
    const [username, SetUsername] = useState({name: '',
                                            age: null,
                                            errormessage: '',
                                        text: "some content",
                                    car: 'Volvo'});
    const header = ''

    const getHeader = () => {
        if (username != '') {
                return username
                }
    }

    const mySubmitHandler = (e) =>{
        alert(`You are submitting ${e.target.user.value}`)
    }

    const checkAge = (e) => {
        console.log(e.target.value)
        if (!isNaN(e.target.value)){
            SetUsername({...username, age: e.target.value, errormessage: ''})

        } 
        else {
            console.log('I am here');
            SetUsername({...username, errormessage: 'Not a number'})
        } 

    }
    return(
        // <form>
        //     <h1>Hello {getHeader()}</h1>
        //     <p>Enter your name:</p>
        //     <input onChange={(e) => SetUsername(e.target.value)}/>
        // </form>
        // <form onSubmit={(e) => mySubmitHandler(e)}>
        //     <h1>Hello</h1>
        //     <p>Enter your name, and submit:</p>
        //     <input name='user'/>
        //     <button type='submit'>Submit</button>
        // </form>
        // <form onSubmit={(e) => mySubmitHandler(e)}>
        //     <h1>Hello {username.name} {username.age}</h1>
        //     <p>Enter your name and age:</p>
        //     <input name='user' onChange={(e) => SetUsername({...username, name: e.target.value})}/><br/>
        //     <input name='userage' onChange={(e) => checkAge(e)}/>{username.errormessage}
            
        // </form>

        // <form>
        //     <h1>Hello {username.name} {username.age}</h1>
        //     <p>Enter some text:</p>
        //     <textarea value={username.text}></textarea>
        // </form>

        <form>
            <h1>Hello</h1>
            <p>Choose the car</p>
            <select value={username.car} onChange={(e) => SetUsername({...username, car: e.target.value})}>
                <option>Ford</option>
                <option>Volvo</option>
                <option>Fiat</option>
            </select>
        </form>
    )
}

export default Forms