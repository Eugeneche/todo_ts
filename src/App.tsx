import * as React from 'react'
import { useEffect } from 'react'
import { Board } from './components/Board/Board'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import './App.css'
import { sessionAPI } from './api/api'
//import { initializeApp } from './redux/initSlice'

export const App = (props: any) => {

  const isInitialize = useAppSelector(state => state.isInitialize)
  const dispatch = useAppDispatch()

  useEffect(() => {
    sessionAPI.initSession()
  }, []);

  return (
    <div className="app">
      <Board {...props} />
    </div>
  );
  }