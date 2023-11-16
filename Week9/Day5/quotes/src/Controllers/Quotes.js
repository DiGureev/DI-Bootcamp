import quotes from '../Data/data.js'
import {useState} from 'react'

const listColors = ['#ff80ed', '#065535', '#000000', '#133337', '#ffc0cb', '#ffffff', '#ffe4e1', '#008080', '#ff0000', '#e6e6fa', '#ffd700', '#00ffff', '#ffa500', '#0000ff', '#c6e2ff', '#ff7373', '#40e0d0', '#b0e0e6', '#d3ffce', '#f0f8ff', '#666666', '#faebd7', '#bada55', '#003366', '#fa8072', '#ffb6c1', '#c0c0c0', '#ffff00', '#800000', '#c39797', '#800080', '#00ff00', '#7fffd4', '#fff68f', '#cccccc', '#eeeeee', '#20b2aa', '#f08080', '#ffc3a0', '#333333', '#c0d6e4', '#66cdaa', '#ff6666', '#ff00ff', '#ff7f50', '#cbbeb5', '#ffdab9', '#468499', '#afeeee', '#b4eeb4', '#00ced1', '#008000', '#f6546a', '#660066', '#b6fcd5', '#f5f5f5', '#0e2f44', '#696969', '#990000', '#000080', '#daa520', '#6897bb', '#808080', '#f5f5dc', '#088da5', '#8b0000', '#8a2be2', '#ccff00', '#ffff66', '#81d8d0', '#ff4040', '#0a75ad', '#dddddd', '#2acaea', '#101010', '#ff1493', '#420420', '#a0db8e', '#66cccc', '#999999', '#794044', '#3399ff', '#cc0000', '#00ff7f']

const Quote = () =>{
    const [QuotesColors, setQuote] = useState({
        curQuote: quotes[(Math.floor(Math.random() * quotes.length))],
        curColor: listColors[(Math.floor(Math.random() * listColors.length))]
    })

    const getNew = () => {
        let newQuote = quotes[(Math.floor(Math.random() * quotes.length))]
        let newColor = listColors[(Math.floor(Math.random() * listColors.length))]
        if (newQuote == QuotesColors.curQuote) {
            newQuote = quotes[(Math.floor(Math.random() * quotes.length))]
            setQuote({curQuote: newQuote, curColor: newColor})
        } else{
            setQuote({curQuote: newQuote, curColor: newColor})
        }
    }
        

    return (
        <div className='main' style={{backgroundColor: QuotesColors.curColor, width: '100vw', height: '100vh',
        }}>
            <div className='quote' style={{width: '500px', backgroundColor: 'white', margin: 'auto', color:'black', padding: '10px', marginTop: '50px', borderRadius: '10px'}}>
                <h3>{QuotesColors.curQuote.quote}</h3>
                <p style={{fontSize: '15px', textAlign: 'right', marginRight: '30px'}}>{QuotesColors.curQuote.author}</p>
                <button style={{backgroundColor: QuotesColors.curColor, border: '1px, solid, grey', padding: '5px 10px', borderRadius: '5px'}} onClick={()=>getNew()}>New quote</button>
            </div>
        </div>
    )
}

export default Quote