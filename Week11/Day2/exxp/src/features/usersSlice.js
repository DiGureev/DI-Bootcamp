import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initState = {
    users:[],
    status: ""
};

const USER_URL = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async()=>{
    const response = await axios.get(USER_URL)
    return response.data
  })
  

export const usersSlice = createSlice({
    name: 'users',
    initialState: initState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
          })
        .addCase(fetchUsers.fulfilled, (state, action)=> {
            state.status = "succeeded";
            state.users = action.payload
        })
        .addCase(fetchUsers.rejected, (state) => {
            state.status = "rejected";
          })
    }  
})

export default usersSlice.reducer

export const usersState = (state)=> state.users.users
export const statusState = (state)=> state.users.status
