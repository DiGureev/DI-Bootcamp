import logo from './logo.svg';
import './App.css';
import CarInfo from './Components/Car.js';
import Event from './Components/Events.js';
import Phone from './Components/Phone.js';
import Color from './Components/Color.js';

const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <CarInfo model={carinfo.model}/> */}
        {/* <Event /> */}
        {/* <Phone/> */}
        <Color/>
      </header>
    </div>
  );
}

export default App;
