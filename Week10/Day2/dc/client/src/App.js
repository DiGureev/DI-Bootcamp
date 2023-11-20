import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  const [message, setMes] = useState('')

  const getData = async()=>{
    let res = await fetch('http://localhost:3005/api/hello')
    let newData = await res.json()
    setData(newData)
  }
  useEffect( ()=>{
    getData()
  })

  const postData = async() =>{
    console.log(input)
    let res = await fetch('http://localhost:3005/api/world', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({input}),
    })
  
    let messageServer = await res.json()
    setMes(messageServer)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{data}</h1>
        <h2>Post to server:</h2>
        <input onChange={(e)=> setInput(e.target.value)}/><button onClick={postData}>Submit</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
