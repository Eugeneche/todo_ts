import * as React from 'react'
import { useState, useEffect } from 'react'
import { Board } from './components/Board/Board'
import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { getSessionId } from './redux/initSlice'
import './App.css'


export const App = (props: any) => {

  let state = useAppSelector(state => state)
  //const[sessionId, setId] = useState(state.sessionId)
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSessionId());
    console.log(dispatch(getSessionId()))
  }, [])
  
  return (
    <div className="app">
      <Board {...props} />
    </div>
  )
}