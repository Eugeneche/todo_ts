import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './taskReducer'


const store = configureStore({
   reducer: tasksSlice,
})