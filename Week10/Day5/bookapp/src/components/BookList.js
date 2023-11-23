import BookCard from "./BookCard.js"
import { useContext } from "react"
import { AppContext } from "../App.js"

const BookListGenerator = (props) => {
    const {BookList} = useContext(AppContext)

    return (
        <div className="BooksContainer">
            {
                BookList.map((item, index) => {
                    return <BookCard item={item} key={index}/>
                })
            }
        </div>
    )
    
}

export default BookListGenerator