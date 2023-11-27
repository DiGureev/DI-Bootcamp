import {useEffect, useState, createContext} from "react"
import {useSelector, useDispatch} from "react-redux"
import { getposts, fetchPosts, fetchUsers } from "./postsSlice.js"
import ReactionButton from "./ReactionButton.js"
import AddPost from "./AddPost.js"
import axios from 'axios'
import Users from "./Users.js"


const PostsList = (props) => {
    const posts = useSelector(state => state.posts.posts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPosts())
        dispatch(fetchUsers())
    },[]);

    // const fetchPost = async() => {
    //     try {
    //         const res = await axios.get(POST_URL)
    //         dispatch(getposts(res.data))
    //     }catch (e){
    //         console.log(e)
    //     }
    // }

    const renderPosts = posts.map(item=> {

        return(
            <article key={item.id}>
                <p>{item.author}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ReactionButton post={item}/>
            </article>
        )
    })


    return(
        <section>
            <AddPost/>
            <Users/>
    
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
}

export default PostsList