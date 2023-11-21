import {useContext} from 'react'
import { AppContext } from '../App.js'
import axios from 'axios'

const Favorite = (props) => {
    const {favorite} = useContext(AppContext)

    const getDay = async(key) => {
        try {
            let data = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=R2NZjvFkgSK6h6GobXtvLK5hI2rbZ6Ag&language=en&details=false`)

            let curWeather = data.data[0].Temperature.Metric.Value
            return curWeather

        } catch (e) {
            console.log(e)
        }
    }

    if (favorite.length > 0) {
        return (
            <>
        <h1>You favorite locations</h1>
        <div className='favmain'>
        {   
            favorite.map((item, index) => {
            //    let today = await getDay(item.keyCity)

               return <div key={index} className='forcastCard '>
                    <p>{item.city}</p>
                    <p>{item.today}C</p>
                </div>
            })
        }
        </div>
        </>
    )
    } else {
        return <h1>You don't have Fav locations yet</h1>
    }

    

}

export default Favorite