import { createSlice , nanoid, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    users: []
  };

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'


export const fetchAuthors = createAsyncThunk('posts/fetchAuthors', async()=>{
  const response = await axios.get(USERS_URL)
  return response.data
})


const usersSlice = createSlice({
    name: "users",
    initialState: initialState,
    reducers:{
    },
        
    extraReducers(builder){
      builder
      .addCase(fetchAuthors.fulfilled, (state,action)=> {
        state.users = action.payload
      })
      //.addCase...
    }
})

// export const {getposts, addreaction, addpost} = postsSlice.actions;

export default usersSlice.reducer;

