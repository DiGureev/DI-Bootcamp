import {configureStore} from '@reduxjs/toolkit';
import productState from '../features/productSlice.js'

export const store = configureStore(
    {
        reducer: {
            products: productState 
        }
    }
)