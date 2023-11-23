import { useReducer, useState } from "react";

function todoReducer(state, action) {
    let newState = [...state]
    switch (action.type) {
      case "ADD_TODO":
        return [...state, { id: Date.now(), text: action.text }];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.id);
      case "EDIT_TODO":
      let arr = [...state]
      let inx = arr.findIndex((todo) => todo.id == action.id)
      let obj = {...arr[inx]}
      obj.text = action.text
      arr[inx]=  obj
      return arr
      case "FILTER_TASKS":
        return state.filter((todo) => todo.text.toLowerCase().includes(action.query.toLowerCase()))
      default:
        return state;
    }
  }

export function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");
    const [display, setDisplay] = useState("none")
    const [query, setQuery] = useState("");
  
    const handleAddTodo = () => {
      if (todoText.trim() === "") return;
      dispatch({ type: "ADD_TODO", text: todoText });
      setTodoText("");
    };
  
    const handleRemoveTodo = (id) => {
      dispatch({ type: "REMOVE_TODO", id });
      
    };

    const handleEditTodo = (id) => {
      dispatch({ type: "EDIT_TODO", id, text: todoText });
      setDisplay('none')
    }

    const handleFilterTodo = () => {
      if (query != ''){
        dispatch({ type: "FILTER_TASKS", query: query });
      }       
    }
  
    return (
      <div>
        <h1>Todo List</h1>
        <input
        type="text"
        placeholder="Search todo"
        onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={handleFilterTodo}>Search</button>
        <input
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              <button onClick={() => setDisplay('')}>Edit</button>
              <div style={{display: display}}>
              <input
                  type="text"
                  onChange={(e) => setTodoText(e.target.value)}
                />
                <button onClick={()=> handleEditTodo(todo.id)}>Done</button>
              </div>

            </li>
          ))}
        </ul>
      </div>
    );
  }


export default TodoList