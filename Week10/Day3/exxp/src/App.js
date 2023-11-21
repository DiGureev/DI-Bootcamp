import {createContext, useState} from 'react'
import Toggle from './components/Toggle.js';
import Count from './components/Count.js';
import {TodoList} from './components/Todo.js'

export const AppContext = createContext()

function App() {
  const [style, setStyle] = useState({})

  return (
    <div style={style}>
    <AppContext.Provider value={{style, setStyle}}>
    <Toggle/>
    </AppContext.Provider>
    <Count/>
    <TodoList/>
    </div>
  );
}

export default App;
