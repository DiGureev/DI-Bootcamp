import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {fetchAuthors } from "./usersSlice.js"
import {fetchPostsByAuthor} from "./postsSlice.js"


const Users = (props) => {
    const users = useSelector(state => state.users.users);
    const posts = useSelector(state => state.posts.posts);
   
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAuthors())
    }, []);

    // const fetchPost = async() => {
    //     try {
    //         const res = await axios.get(POST_URL)
    //         dispatch(getposts(res.data))
    //     }catch (e){
    //         console.log(e)
    //     }
    // }

    return(
        <section>
            <h2>Author</h2>
            <select onChange={(e)=>dispatch(fetchPostsByAuthor(e.target.value))}>
                {
                    users.map(item => {
                        return(
                            <option value={item.id} key={item.id}>{item.name}</option>
                        )
                    })
                }
            </select>
        </section>
    )
}

export default Users