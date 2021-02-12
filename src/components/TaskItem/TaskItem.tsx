import * as React from "react"
import * as ReactDOM from "react-dom"
import { useState } from "react"
import { TaskForm } from "../TaskForm/TaskForm"


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
            <ul>
                <li>{text}</li>
                <li>{isCompleted}</li>
                <li>{urgency}</li>
            </ul>
            }
        </div>
    )
}


