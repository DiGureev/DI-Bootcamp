import {useState, useEffect} from 'react'

const Color = () => {
    const [favoriteColor, setColor] = useState('red')

    useEffect(()=>{
        // alert('useEffect reached')
        // console.log('useEffect reached');
        setTimeout( () => {
            setColor('yellow')
        }, 1000)
        
    }, []);

    return (
        <>
            <h1>My Favorite Color is {favoriteColor}</h1>
            <button onClick={()=> setColor('blue')}>Click</button>
        </>
    )

}

export default Color