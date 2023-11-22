import {useContext, useState} from 'react'
import { AppContext } from '../App.js'


const Forcast = (props) => {
    const {keyCity, city, today, allForcast,image} = props
    const {favorite, setFavorite} = useContext(AppContext)
    const [display, setDisplay] = useState('none')

    const putFav = () => {
        let arr = [...favorite];
        let newObj = {keyCity, city, today, allForcast, image}
        console.log(newObj)
        arr.push(newObj)
        console.log(arr)
        setFavorite(arr)
        setDisplay('block')
    }

    if (city.length > 0){
        return (
        <div className='card'>
                <div className='header'>
                    <div className='city'>
                        <img src={image} style={{width: '50px', height: '50px'}}/>
                        <div>
                        <p>{city}</p>
                        <p>{today}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={()=>putFav()}>Add to My Fav</button>
                        <div style={{display: {display}}}>Location added</div>
                    </div>
                </div>
                <div>
                    <h2>5 days forcast</h2>
                    <div className='forcast'>
                        {
                            allForcast.map((item, index) => {
                                return <div key={index} className='forcastCard'>
                                        <p>{item.Date.slice(0,10)}</p>
                                        <p>{item.Day.IconPhrase}</p>
                                        <p>Min: {item.Temperature.Minimum.Value}{item.Temperature.Minimum.Unit}</p>
                                        <p>Max: {item.Temperature.Maximum.Value}{item.Temperature.Maximum.Unit}</p>
                                        </div>
                            })
                        }
                    </div>
                </div>

        </div>
    )
    } else {
        return <div className="notFound">We can't get the weather</div>
    }
    
}

export default Forcast