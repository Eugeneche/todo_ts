import * as React from 'react'
import {useState} from 'react'
import * as ReactDOM from 'react-dom'
import { TaskItem } from '../TaskItem/TaskItem'
import '../../App.css'
import add from '../../img/add.svg'

export const Board = () => {
  return (
    <div className="board board__main">
      <img src={add} className="board__add-img" />
      <header className="App-header">
       <h1>Todo List</h1>
      </header>
      <TaskItem text={'1'} urgency={1} />
    </div>
  );
};
