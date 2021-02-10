import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { TaskItem } from './components/TaskItem/TaskItem'
import './App.css'
import add from '../src/img/add.svg'

const App = () => {
  return (
    <div className="board board__main">
      <img src={add} className="board__add-img" />
      <header className="App-header">
       <h1>Todo List</h1>
      </header>
      <TaskItem text={'1'} urgency={1} />
    </div>
  );
}

export default App;
