import { useRef, useContext } from "react"
import { AppContext } from "../App.js"
import axios from 'axios'

const Book = (props) => {
    const query = useRef('')
    const {BookList, setBooks} = useContext(AppContext)

    const getBooks = async (q) => {
        if (q.length > 0) {
            let data = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
            setBooks(data.data.items)
        }
    }

    const sortBooks = (option) => {
        if (option === 'Newest') {
           const workList = [...BookList]
           workList.sort((a,b) => {
                let first = a.volumeInfo.publishedDate
                let second = b.volumeInfo.publishedDate

                if (first === undefined) {
                    first = '0000'
                } else if (second === undefined) {
                    second = '0000'
                }
                return Number(second.slice(0,4)) - Number(first.slice(0,4))})

            setBooks(workList) 
        } else if (option === 'Oldest'){
            const workList = [...BookList]
            workList.sort((a,b) => {
                let first = a.volumeInfo.publishedDate
                let second = b.volumeInfo.publishedDate

                if (first === undefined) {
                    first = '0000'
                } else if (second === undefined) {
                    second = '0000'
                }
                return Number(first.slice(0,4)) - Number(second.slice(0,4))})
            
            setBooks(workList) 
        }
    }

    return (
        <div className="SearchBlock" style={{height: '30px', textAlign:'center', padding:'20px'}}>
            <input placeholder="Type here..." ref={query} style={{height:'100%', boxSizing:'border-box'}}/>
            <button onClick={() => getBooks(query.current.value)} style={{height:'100%', boxSizing:'border-box', marginRight:'10px', backgroundColor: '#333333', color: 'white', border: '0px solid grey'}}>Search</button>
            <select defaultValue='Sort' onChange={(e) => sortBooks(e.target.value)} style={{height:'100%',  backgroundColor: '#333333', color: 'white'}}>
                <option disabled>Sort</option>
                <option value='Newest'>Newest</option>
                <option value='Oldest'>Oldest</option>
            </select>
        </div>
    )
}

export default Book