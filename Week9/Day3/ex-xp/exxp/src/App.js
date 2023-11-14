import logo from './logo.svg';
import './App.css';
import {Exercise} from './components/Exercise3.js'

import {UserFavoriteAnimals} from './components/UserFavoriteAnimals.js'

import {DemoCarousel} from './components/Carousel.js'

const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <div className="App">
      <header className="App-header-">
        {/* <p>Hello World</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3> */}
        {/* <ul>
        {
        user.favAnimals.map((animal, index) => {
          return <UserFavoriteAnimals animal={animal} key={index}/>
        })
        }
        </ul> */}
      {/* <Exercise /> */}
      <DemoCarousel/>
      </header>
    </div>
  );
}

export default App;
