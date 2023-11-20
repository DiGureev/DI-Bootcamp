import {Routes, Route, NavLink } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreen from './Components/HomeScreen.js'
import ProfileScreen from './Components/ProfileScreen.js'
import ShopScreen from './Components/ShopScreen.js'
import ErrorBoundary from './Components/ErrorBoundary.js'


function App() {
  const obj = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27,
  }

  const getData = async () => {
    try{
      let rawData = await fetch('https://webhook.site/c4a33ec7-29a0-496f-a240-4c63031553e8', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(obj),
      })
      let newData = await rawData.json()
      setData(newData)
      console.log(newData)
    } catch (e) {
      console.log(e)
    }
    
  }


  return (
    <div className="App">
      <nav>
        <NavLink to={`/`}>Home</NavLink>{' '}
        <NavLink to={`/profile`}>Profile</NavLink>{' '}
        <NavLink to={`/shop`}>Screen</NavLink>
      </nav>

      <button onClick={getData}>Get Response</button>
      
      <Routes>
          <Route path='/' element={
          <ErrorBoundary>
            <HomeScreen/>
          </ErrorBoundary>}/>
          <Route path='/profile' element={<ErrorBoundary>
            <ProfileScreen/>
          </ErrorBoundary>}/>
        <Route path='/shop' element={<ErrorBoundary>
            <ShopScreen/>
          </ErrorBoundary>}/>
      </Routes>
       
    </div>
  );
}

export default App;
