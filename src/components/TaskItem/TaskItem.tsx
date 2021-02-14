import * as React from "react"
import * as ReactDOM from "react-dom"
import { useState } from "react"
import { TaskForm } from "../TaskForm/TaskForm"
import done from '../../img/done.svg'
import inProgress from '../../img/in_progress.svg'


type taskProps = {
    text: string
    isCompleted?: boolean
    urgency: number
  }

export const TaskItem = ({text, isCompleted, urgency}:taskProps) => {
    const [mode, setMode] = useState(false)
    return (
        <div className="task-item">
            {mode === true ? <TaskForm /> :
            <div className="task-item__status"><img src={isCompleted ? done : inProgress}/></div>}
            <div className="task-item__text">{text}</div>
        </div>
    )
}


