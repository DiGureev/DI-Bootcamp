import { createSlice } from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';

const BASE_API = 'http://localhost:3005/api/products';

const initState = {
    data:[ ]
};

export const getAllProducts = createAsyncThunk('products/all', async()=>{
    const response = await axios.get(BASE_API)
    return response.data
  })

export const getOneProduct = createAsyncThunk('products/one', async(id)=>{
    const response = await axios.get(`${BASE_API}/${id}`)
    return response.data[0]
  })

export const searchProducts = createAsyncThunk('products/search', async(text)=>{
const response = await axios.get(`${BASE_API}/search?name=${text}`)
return response.data
})

export const addProduct = createAsyncThunk('products/add', async(obj)=>{
    const {name, price} = obj
    const response = axios.post(BASE_API, {name, price}, { "content-type": "application/json" })
    return response
});

export const editProduct = createAsyncThunk('products/edit', async(obj)=>{
    const {id,name,price} = obj
    const response = await axios.put(`${BASE_API}/${id}`, {
        name,
        price
        })
    return response.data
})

export const deleteProduct = createAsyncThunk('products/delete', async(id)=>{
    const response = await axios.delete(`${BASE_API}/${id}`)
    console.log(response.data)
    return response.data
})


export const productSlice = createSlice({
    name: 'products',
    initialState: initState,
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(getAllProducts.fulfilled, (state, action)=> {
            state.data = action.payload;
        })
        .addCase(getOneProduct.fulfilled, (state, action) => {
            console.log(action)
            state.data = action.payload;
          })
        .addCase(searchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
        console.log(action)
        state.data = action.payload.data;
        })
        .addCase(addProduct.rejected, (action) => {
            console.log(action)
        })
        .addCase(editProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            console.log(action)
        })
    }
})

export default productSlice.reducer

export const productState = (state)=> state.products.data