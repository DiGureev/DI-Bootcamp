import logo from './logo.svg';
import './App.css';
import {useState, createContext} from 'react'
import Display from './Components/Display.js';
import Action from './Components/Action.js';

// useContext - createContext

export const AppContext = createContext()

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{count, setCount}}>
          <Display/>
          <Action/>
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
