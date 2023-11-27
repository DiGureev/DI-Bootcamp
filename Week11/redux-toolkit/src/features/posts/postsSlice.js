import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const posts = [
    {
      id: "1",
      title: "Learning Redux",
      content: "I've heard good things.",
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
    {
      id: "2",
      title: "Actions...",
      content: "The more I say action, the more I want to do something.",
      reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0,
      },
    },
  ];

const initialState = {
    posts: []
  };

const POST_URL = 'https://jsonplaceholder.typicode.com/posts';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users'


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async()=>{
  const response = await axios.get(POST_URL)
  return response.data
})

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async()=>{
  const response = await axios.get(POST_URL)
  return response.data
})

export const fetchPostsByAuthor = createAsyncThunk('posts/fetchPostsByAuthor', async(id)=>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  return response.data
})


const postsSlice = createSlice({
    name: "posts",
    initialState: initialState,
    reducers:{
        getposts: (state, action) => {
            state.posts = action.payload
        },

        addreaction: (state,action) => {
          const {postId, reaction} = action.payload;
          const existingPost = state.posts.find((post) => post.id === postId);
          if (existingPost){
            existingPost.reactions[reaction] ++;
          }
        },
        
        addpost: {
          reducer (state, action) {
            state.posts.push(action.payload)
          },

          prepare (title,content){
            return {payload: {
              id: nanoid(),
              title,
              content,
              reactions: {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0,
              },
            }}
          }
        }

    },
    extraReducers(builder){
      builder
      .addCase(fetchPosts.fulfilled, (state,action)=> {
        const loadedPosts = action.payload.map(post => {

          post.reactions={
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
          return post
        })
        state.posts = loadedPosts
     
      })
      .addCase(fetchUsers.fulfilled, (state,action)=> {
        const loadedPosts = state.posts.map(post => {
          let author = action.payload.find(item => item.id === post.userId)

          post.author= author.name
          return post
        })
        state.posts = loadedPosts
      })
      .addCase(fetchPostsByAuthor.fulfilled, (state,action)=>{
        const loadedPosts = action.payload.map(post => {

          post.reactions={
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
          return post
        })
        state.posts = loadedPosts
      })
      //.addCase...
    }
})

export const {getposts, addreaction, addpost, getfiltered} = postsSlice.actions;

export default postsSlice.reducer;

