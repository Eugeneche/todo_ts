import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'
import initSlice from './initSlice'

export const store = configureStore({
    reducer: {
      addTask: todosSlice,
      isInitialize: initSlice
    },
  })
  
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch