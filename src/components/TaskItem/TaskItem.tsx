import done from '../../img/done.svg'
import inProgress from '../../img/in_progress.svg'


export const TaskItem = (props: any) => {
    return (
        <div className='task-item'>
            <div className='task-item__status'><img src={props.isCompleted ? done : inProgress} alt='task status' /></div>
            <div className='task-item__text'>{props.text}</div>
        </div>
    )
}


