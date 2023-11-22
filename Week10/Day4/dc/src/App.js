import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {add, update, removeDay, removeTask} from './Redux/actions.js'
import {useRef, useState} from 'react'

function App() {
  const dayList = useSelector(state => state.plannerReducer.days)
  const dispatch = useDispatch()
  let task = useRef('')
  let date = useRef('')
  let newTask = useRef('')
  const [disp, setDisp]= useState('none')
  console.log(disp)

  console.log(dayList)


  const updateAll = (date, element) => {
    setDisp('none')
    dispatch(update(date, element, newTask.current.value))
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>My planner</h1>
      <input type='text' ref={task}/>
      <input type='date' ref={date}/>
      <button onClick={()=> dispatch(add(date.current.value, task.current.value))}>Add</button>
      <div>
        {
          dayList.map((item, index) => {
            return <div key={index}>
                    <p>{item.date}</p>
                    <button onClick={()=>dispatch(removeDay(item.date))}>Delete day</button>
                  {
                item.tasks.map((element, index) => {
                  return <div key={index}>
                          {element}
                          <button onClick={() => setDisp('')}>Edit</button>
                          <button onClick={()=>dispatch(removeTask(item.date, element))}>Delete</button>
                          <input type='text' ref={newTask} style={{display: disp}}/>
                          <button style={{display: disp}} onClick={()=>updateAll(item.date, element)}>Update</button>
                          </div>
                })
              }
            </div>
          })
        }
      </div>
      </header>
    </div>
  );
}

export default App;
