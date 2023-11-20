import PostList from './PostList.js'
import Ex1 from './Example1.js'
import Ex2 from './Example2.js'
import Ex3 from './Example3.js'

const HomeScreen = (props) => {
    return (
        <div>
            <h2>Home</h2>
            <PostList/>
            <Ex1/>
            <Ex2/>
            <Ex3/>
        </div>
    )
}

export default HomeScreen