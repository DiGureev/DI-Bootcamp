const BookCard = (props) => {
    const item = props.item
    let imgBox = item.volumeInfo.imageLinks
    let imgLink = ''
    
    if (imgBox === undefined) {
        imgLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EravWMwKPoLnVh27jjoNJLJqjDXfQV6CJhZ1GqO3NGWB-G8KGesEWRYplbcya03d3Vk&usqp=CAU'
    } else {
        imgLink = item.volumeInfo.imageLinks.thumbnail
    }

    let date = item.volumeInfo.publishedDate

    if (date === undefined) {
        date = ''
    } else {
        date = date.slice(0,4)
    }

    return (
        <div className="bookCard">
            
            <img src={imgLink} />
            <a href={item.selfLink}><p className="BookTitle">{item.volumeInfo.title}</p></a>
            <p className="BookAuthor">{item.volumeInfo.authors}</p>
            <p className="BookDate">Published: {date}</p>
        </div>
    )

}

export default BookCard

