import logo from './logo.svg';
import './App.css';
import {Exercise} from './components/Exercise3.js'
import {UserFavoriteAnimals} from './components/UserFavoriteAnimals.js'
import {DemoCarousel} from './components/Carousel.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/BootstrapCard.js'
import ListGroup from 'react-bootstrap/ListGroup';
import Planets from './components/BootstrapList.js'


const myelement = <h1>I Love JSX!</h1>;
const sum = 5+5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

const celebrities = [
  {
      title: 'Bob Dylan',
      imageUrl: 'https://miro.medium.com/max/4800/1*_EDEWvWLREzlAvaQRfC_SQ.jpeg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      description:
          'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
  },
  {
      title: 'McCartney',
      imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paul_McCartney_in_October_2018.jpg/240px-Paul_McCartney_in_October_2018.jpg',
      buttonLabel: 'Go to Wikipedia',
      buttonUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
      description:
          'Sir James Paul McCartney CH MBE (born 18 June 1942) is an English singer, songwriter, musician, composer, and record and film producer who gained worldwide fame as co-lead vocalist and bassist for the Beatles.',
  },
]

const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

      {/* Daily Challenge */}

      {/* <DemoCarousel/> */}

      {/* Ex-XP GOLD */}

      {/* {
      celebrities.map((person, index) => {
          return <Card img={person.imageUrl} name={person.title} desc={person.description} btn={person.buttonUrl} lable={person.buttonLabel} key={index}/>
        })
      } */}
      
      {/* <div style={{width: 400, textAlign:'left'}}>
      <ListGroup width='500px'>
      {
      planets.map((planet, index) => {
          return <Planets planet={planet} key={index}/>
        })
      }
      </ListGroup>
      </div> */}

      </header>
    </div>
  );
}

export default App;
