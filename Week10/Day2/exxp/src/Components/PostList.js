import rawData from '../Data/data.json'

const PostList = (props) => {

    return(
        <>
        <h1>Hi This is a Title</h1>
        <h2>{rawData[0].title}</h2>
        <p>{rawData[0].content}</p>
        <h2>{rawData[1].title}</h2>
        <p>{rawData[1].content}</p>
        </>
    )

}

export default PostList