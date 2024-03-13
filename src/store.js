import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlices'
import  activeUserSlice  from './slices/activeUserSlices'

export const store = configureStore({
  reducer: {
    loginuserdata : userSlice,
    //activeuserdata : activeUserSlice,
    activeuserdata: activeUserSlice,
  },
})