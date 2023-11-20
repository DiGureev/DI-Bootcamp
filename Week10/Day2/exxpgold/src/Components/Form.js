import {useState} from 'react'
import axios from 'axios';

const Form = () =>{
    const [data, setData] = useState({
        userId: '',
        title: '',
        body: ''    
        })

    const {userId, title, body} = data

    const postData = async(e) => {
     

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify({userId, title, body}),
        })
        console.log(res.data)
    }

    return(
        <>
        <input value={userId} placeholder='userId' onChange={(e) => setData({...data, userId: e.target.value})}/>
      <input value={title} placeholder='Title' onChange={(e) => setData({...data, title: e.target.value})}/>
        <input value={body} placeholder='Title' onChange={(e) => setData({...data, body: e.target.value})}/>
      <button type='Submit' onClick={(e) => postData (e)}>Add user</button>
        </>
    )
}

// const Form = () => {
//     const [data, setData] = useState({
//         username: '',
//         email: '',
//     })

//     const postData = async() => {
//         let username = data.username
//         let email = data.email
//         let res = await fetch('https://jsonplaceholder.typicode.com/users/', {
//             method: 'POST',
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify({username, email}),
//         })

//         let answer = await res.json()

//         // console.log(`Username: ${username}, Email: ${email}` )
//         console.log(answer);

//     }

//     return (
//         <>
//         <input placeholder='Username' onChange={(e) => setData({...data, username: e.target.value})}/>
//         <input placeholder='Email' onChange={(e) => setData({...data, email: e.target.value})}/>
//         <button onClick={postData}>Add user</button>
//         </>
//     )
// }

export default Form