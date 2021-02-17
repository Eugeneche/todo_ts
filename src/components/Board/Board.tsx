import * as React from 'react'
import {useState} from 'react'
import * as ReactDOM from 'react-dom'
import { TaskItem } from '../TaskItem/TaskItem'
import CreatingModalContainer from '../CreatingModal/CreatingModalContainer'
import '../../App.css'
import add from '../../img/add.svg'

export const Board = () => {

  const [mode, setMode] = useState(false)

  return (
    <div className="board board__main">
      {mode && <CreatingModalContainer />}     
      <header className="board__header">
        <h1 className="board__title">Todo List</h1>
        <button className="board__add-btn" onClick={() => setMode(true)}><img src={add} alt="add task button"/></button>       
      </header> 
      <div className="board__tasks">
        <TaskItem text={'Learn React'} urgency={1} />
      </div>
    </div>
  );
};
