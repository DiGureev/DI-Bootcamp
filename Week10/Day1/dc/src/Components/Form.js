import {useState, useEffect} from 'react'


const Form = () => {
    const [inputs, setInput] = useState({
        firstname: '',
        lastname: '',
        age: 0,
        sex: '',
        select: '',
        nuts: 'No',
        lactose: 'No',
        vegan: 'No',
        show: true
    })

    const handleChange = (e) => {
        let name = e.target.name
        let value = ''

        if (e.target.type === 'checkbox'){
            value = e.target.checked
            if (value === true){
                value = 'Yes'
            }
        } else {
            value = e.target.value
        }
        
        console.log(name)
        console.log(value)

        setInput({...inputs, [name]: value})
    }

    useEffect(()=>{
        console.log('Effect')
    })

    const changeShow =()=>{
        setInput({...inputs, show: false })
        console.log(inputs.show)
    }

    

    if (inputs.show){
        return (
        <form method="get" action='http://localhost:3000/' onSubmit={changeShow}>
            <input type='text' placeholder='First name' name='firstname' onChange={(e)=> handleChange(e)}/><br/>
            <input type='text' placeholder='Last name' name='lastname' onChange={(e)=> handleChange(e)}/><br/>
            <input type='text' placeholder='Age' name='age' onChange={(e)=> handleChange(e)}/><br/>
            <input type='radio' name='sex' value='Male' onChange={(e)=> handleChange(e)}/> Male<br/>
            <input type='radio' name='sex'value='Female' onChange={(e)=> handleChange(e)}/> Female<br/>
            Select your destination:<br/>
            <select name='select' onChange={(e)=> handleChange(e)}>
                <option value='choose'>--please choose your destination--</option>
                <option value='NY'>New-York</option>
                <option value='TLV'>Tel-Aviv</option>
            </select><br/>
            Dietary restrictions:<br/>
            <input type='checkbox' name='nuts' onChange={(e)=> handleChange(e)}/> Nuts free<br/>
            <input type='checkbox' name='lactose'onChange={(e)=> handleChange(e)}/> Lactose free<br/>
            <input type='checkbox' name='vegan'onChange={(e)=> handleChange(e)}/> Vegan free<br/>
            <button type='Submit'>Submit</button>
        </form>
    )  
    } else {
        return (
            <>
                <h2>Entered information:</h2>
                <p>Your name: {inputs.firstname} {inputs.lastname}</p>
                <p>Your age: {inputs.age}</p>
                <p>Your gender: {inputs.sex}</p>
                <p>Your destination: {inputs.select}</p>
                <p>Your dietary restrictions:</p>
                Nuts free: {inputs.nuts}<br/>
                Lactose free: {inputs.lactose}<br/>
                Vegan free: {inputs.vegan}<br/>
            </>
        )
        
    }
}

export default Form