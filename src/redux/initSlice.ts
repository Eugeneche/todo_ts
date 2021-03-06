import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { sessionAPI } from '../api/api'


const initialState: boolean = false 

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    initializeApp() {
      //!state && (state = true)
      sessionAPI.initSession()
    }
  }
})

export default initSlice.reducer
export const { initializeApp } = initSlice.actions
export const isInit = (state: RootState) => state.isInitialize