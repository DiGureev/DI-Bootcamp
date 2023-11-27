import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postsSlice.js'
import usersReducer from '../features/posts/usersSlice.js'

export const store = configureStore(
    {
        reducer: {
            counter: counterReducer,
            posts: postsReducer,
            users: usersReducer,
        }
    }
)

