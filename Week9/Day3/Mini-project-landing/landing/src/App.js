import Header from './components/Header.js'
import Card from './components/Card.js'
import Contacts from './components/Contacts.js'
import './App.css'

let cards = [
  {
    header: 'About the Company',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    color: ''
  },
  {
    header: 'Our Values',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    color: 'lightgrey'
  },
  {
    header: 'Our Mission',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    color: ''
  },
  
]

function App() {
  return (
    <div className="App">
      <header className="App-header-">
        <Header/>
        {
          cards.map((item, index) => {
           return <Card header={item.header} text={item.text} color={item.color} indx={index}/>
          })
        }
        <Contacts/>
      </header>
    </div>
  );
}

export default App;
