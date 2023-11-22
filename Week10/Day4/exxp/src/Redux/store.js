import {configureStore} from '@reduxjs/toolkit'
import { todoReducer } from './reducers.js'

export default configureStore({
    reducer:{
        todoReducer,
    }
})