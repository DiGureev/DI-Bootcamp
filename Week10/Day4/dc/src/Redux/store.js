import {configureStore} from '@reduxjs/toolkit'
import { plannerReducer } from './reducers.js'

export default configureStore({
    reducer:{
        plannerReducer,
    }
})