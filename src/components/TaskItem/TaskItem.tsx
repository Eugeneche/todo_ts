import * as React from "react"
import done from '../../img/done.svg'
import inProgress from '../../img/in_progress.svg'


/* type taskProps = {
    text: string
    isCompleted?: boolean
    urgency: number
  } */

export const TaskItem = (props: any) => {
    return (
        <div className="task-item">
            <div className="task-item__status"><img src={props.isCompleted ? done : inProgress}/></div>
            <div className="task-item__text">{props.text}</div>
        </div>
    )
}


