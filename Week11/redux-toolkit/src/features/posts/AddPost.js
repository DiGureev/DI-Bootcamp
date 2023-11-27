import { useState } from "react"
import {addpost} from "./postsSlice.js"
import { useDispatch } from "react-redux"

const AddPost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addpost(title,content))
        setTitle('')
        setContent('')
    }

    return (
        <section>
            <h2>Add Post</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="postTitle">Post Title</label>
                <input id="postTitle" name="postTitle" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <label htmlFor="postContent">Post Content</label>
                <input id="postContent" name="postContent" type="text" value={content} onChange={(e)=> setContent(e.target.value)}/>

                <input type="Submit" value="Save Post"/>
            </form>
        </section>
   )
}

export default AddPost