import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './features/userSlice'
import ownerReducer  from './features/ownerSlice'
import ownerDetailReducer  from './features/ownerDetailSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        ownerReducer,
        ownerDetailReducer
    }

})
