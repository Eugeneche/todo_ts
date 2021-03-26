import * as React from 'react'
import { useState } from 'react'
import { TaskItem } from '../TaskItem/TaskItem'
import { CreatingModal } from '../CreatingModal/CreatingModal'
import { Todo } from '../../redux/todosSlice'
import { useAppSelector } from '../../hooks/hooks'
import '../../App.css'
import add from '../../img/add.svg'
import filter from '../../img/filter.svg'



export const Board = () => {

  const [mode, setMode] = useState(false)

  let tasks = useAppSelector(state => state.taskList)

  let mapTasks: Array<any> = []
  if (tasks.length > 0) {
    mapTasks = tasks.map((task: Todo) => {
      return <div key={task.id} className="board__divider">
        <TaskItem id={task.id} text={task.text} isCompleted={task.isCompleted} urgency={task.urgency} />
      </div>})
  } 

  return (
    <div className="board board__main">
      {mode && <CreatingModal setMode={setMode} />}     
      <header className="board__header">
        <h1 className="board__title">Todo List</h1>
        <button className="board__filter-btn"><img src={filter} alt="filter button"/></button>
        <button className="board__add-btn" onClick={() => setMode(true)}><img src={add} alt="add task button"/></button>            
      </header> 
      <div className="board__tasks">       
        {mapTasks}
      </div>
    </div>
  );
};
