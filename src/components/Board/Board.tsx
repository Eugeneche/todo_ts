import * as React from 'react'
import { useState } from 'react'
import { TaskItemContainer } from '../TaskItem/TaskItemContainer'
import CreatingModalContainer from '../CreatingModal/CreatingModalContainer'
import '../../App.css'
import add from '../../img/add.svg'
import { todo } from '../../redux/redux-toolkit'

type propsType = {
  tasks: Array<todo>
  addTask: any
}

export const Board = (props: propsType) => {

  const [mode, setMode] = useState(false)

  const tasksList = props.tasks 
  let n: Array<any> = []
  if (tasksList.length > 0) {
    n = tasksList.map((task: todo) => {
      return <div key={task.id} className="board__divider">
        <TaskItemContainer text={task.text} isCompleted={task.isCompleted} />
      </div>})
  } 

  return (
    <div className="board board__main">
      {mode && <CreatingModalContainer />}     
      <header className="board__header">
        <h1 className="board__title">Todo List</h1>
        <button className="board__add-btn" onClick={() => setMode(true)}><img src={add} alt="add task button"/></button>       
      </header> 
      <div className="board__tasks">
        {n}
      </div>
    </div>
  );
};
