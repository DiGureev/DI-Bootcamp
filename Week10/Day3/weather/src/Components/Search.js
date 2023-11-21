import {useState, useRef} from 'react'
import axios from 'axios'
import Forcast from './Forcast.js'


const Search = (props) => {
    const [city, setCity] = useState('')
    const [today, setToday] = useState('')
    const [allForcast, setForcast] = useState([])
    const [image, setImg] = useState([])

    let qRef = useRef('')

    const getKey = async() => {
        let q = qRef.current.value
        try {
           let data = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=R2NZjvFkgSK6h6GobXtvLK5hI2rbZ6Ag&q=${q}&language=en-us`)
           let key = data.data[0].Key
           setCity(data.data[0].AdministrativeArea.LocalizedName)
           getDay(key)
           getForcast(key)
           getImgage()
        } catch (e) {
            console.log(e)
        }  
    }

    const getDay = async(key) => {
        try {
            let data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=R2NZjvFkgSK6h6GobXtvLK5hI2rbZ6Ag&language=en&details=false`)

            let curWeather = data.data[0].Temperature.Metric.Value
            setToday(curWeather)

        } catch (e) {
            console.log(e)
        }
    }

    const getForcast = async (key) => {
        try {
            let data = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=R2NZjvFkgSK6h6GobXtvLK5hI2rbZ6Ag&metric=true`)

            let forcast = data.data.DailyForecasts
            console.log(forcast)
            setForcast(forcast)

        } catch (e) {
            console.log(e)
        }
    }
    
    const getImgage = () => {
        if (today > 20 ){
            setImg('https://cdn.iconscout.com/icon/free/png-256/free-weather-191-461610.png?f=webp')
        } else if (today > 5) {
            setImg('https://cdn-icons-png.flaticon.com/512/1247/1247767.png')
        } else if (today < 5) {
            setImg('https://cdn-icons-png.flaticon.com/512/6221/6221304.png')
        }
    }

    return (
        <div className='container'>
        <input className='input' type='text' ref={qRef}/><button onClick={getKey}>Search</button>
        
        <Forcast city={city} today={today} allForcast={allForcast} image={image}/>
        </div>
    )
}

export default Search
