import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from '../reducers/taskReducer'


const store = configureStore({
   reducer: tasksSlice,
});