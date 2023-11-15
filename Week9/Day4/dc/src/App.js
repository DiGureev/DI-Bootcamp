import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [languages, setLanguages] = useState([
                                              {name: "Php", votes: 0},
                                              {name: "Python", votes: 0},
                                              {name: "JavaSript", votes: 0},
                                              {name: "Java", votes: 0}
                                            ])
  const handleClick = (name) => {
    let languages1 = [...languages]
    languages1.forEach(item => {
      if (item.name == name) {
        item.votes +=1
      }
    })

    setLanguages(languages1)
  }

  return (
    <div className="App">
      <header className="App-header">
        
      {
      languages.map((item, index) => {
        return (<div key={index} style={{textAlign: 'left', padding:'5px'}} >
          <div style={{
            width: '400px',
            backgroundColor: 'lightblue',
            border:'1px solid black',
            color: 'black',
            padding: '10px'
          }} onClick={()=> handleClick(item.name)}>{item.votes}  {item.name} <span style={{color: 'green'}}>Click Here</span></div>
        </div>)
      })
      }

      </header>
    </div>
  );
}

export default App;
