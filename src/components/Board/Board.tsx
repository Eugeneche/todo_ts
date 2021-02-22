import * as React from 'react'
import { useState } from 'react'
import { TaskItemContainer } from '../TaskItem/TaskItemContainer'
import CreatingModalContainer from '../CreatingModal/CreatingModalContainer'
import '../../App.css'
import add from '../../img/add.svg'
import filter from '../../img/filter.svg'
import { todo } from '../../redux/redux-toolkit'

type propsType = {
  tasks: Array<todo>
  addTask: any
}

export const Board = (props: propsType) => {

  const [mode, setMode] = useState(false)

  const propsTasks = props.tasks 
  let tasksList: Array<any> = []
  if (propsTasks.length > 0) {
    tasksList = propsTasks.map((task: todo) => {
      return <div key={task.id} className="board__divider">
        <TaskItemContainer text={task.text} isCompleted={task.isCompleted} />
      </div>})
  } 

  return (
    <div className="board board__main">
      {mode && <CreatingModalContainer setMode={setMode} />}     
      <header className="board__header">
        <h1 className="board__title">Todo List</h1>
        <button className="board__filter-btn"><img src={filter} alt="filter button"/></button>
        <button className="board__add-btn" onClick={() => setMode(true)}><img src={add} alt="add task button"/></button>            
      </header> 
      <div className="board__tasks">
        {tasksList}
      </div>
    </div>
  );
};
