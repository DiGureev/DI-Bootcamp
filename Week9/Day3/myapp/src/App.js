import logo from './logo.svg';
import Hello from './Hello.js'
import User from './components/User.js'
import './App.css';
import users from './users.json'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          users.map(item => {
            return <User info={item} key={item.id}/>
          })
        }
      </header>
    </div>
  );
}

export default App;
