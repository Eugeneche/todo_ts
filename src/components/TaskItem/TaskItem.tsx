import * as React from "react"
import * as ReactDOM from "react-dom"


type taskProps = {
    text: string
    isCompleted?: boolean
    urgency: number
  }

export const TaskItem = ({text, isCompleted, urgency}:taskProps) => {
    return <div className="board__task-item">
        <ul>
            <li>{text}</li>
            <li>{isCompleted}</li>
            <li>{urgency}</li>
        </ul>
    </div>
}


