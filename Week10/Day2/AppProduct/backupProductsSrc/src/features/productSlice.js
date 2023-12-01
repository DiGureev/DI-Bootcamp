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
    return response.data
  })

export const searchProducts = createAsyncThunk('products/search', async(text)=>{
const response = await axios.get(`${BASE_API}/search?name=${text}`)
return response.data
})

export const addProduct = createAsyncThunk('products/add', async(name,price)=>{
    const response = await axios.post(BASE_API, {
        name,
        price
      })
    return response.data
    })

export const editProduct = createAsyncThunk('products/edit', async(id,name,price)=>{
    const response = await axios.put(`${BASE_API}/${id}`, {
        name,
        price
        })
    return response.data
})

export const deleteProduct = createAsyncThunk('products/delete', async(id)=>{
    const response = await axios.delete(`${BASE_API}/${id}`)
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
            state.data = action.payload;
          })
        .addCase(searchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        })
        .addCase(addProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        })
        .addCase(editProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default productSlice.reducer

export const productState = (state)=> state.products.data