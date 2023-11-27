import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initState = {
    age: 0,
    loading:false
};

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async(age)=>{
    let res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve (
            age+=1
          )
        }, 1000)
    })
    return res
  })

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async(age)=>{
    let res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve (
            age-=1
          )
        }, 1000)
    })
    return res
})

export const ageSlice = createSlice({
    name: 'age',
    initialState: initState,
    reducers: {
        },
    extraReducers(builder){
        builder
        .addCase(ageUpAsync.pending, (state) => {
            console.log('Im loading...')
            state.loading = true;
            })
        .addCase(ageUpAsync.fulfilled, (state, action)=> {
            console.log(ageUpAsync)
            console.log('Im done...')
            console.log(action)
            state.loading = false;
            state.age = action.payload
        })
        .addCase(ageDownAsync.pending, (state) => {
            state.loading = true;
            })
        .addCase(ageDownAsync.fulfilled, (state, action)=> {
            state.loading = false;
            state.age = action.payload
        })
    }
    
})

export default ageSlice.reducer

export const ageState = (state)=> state.age.age
export const loading = (state)=> state.age.loading
