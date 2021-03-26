import { useState } from 'react'
import { Todo } from '../../redux/todosSlice'
import { useAppDispatch } from '../../hooks/hooks'
import { fetchAlterTodo } from '../../redux/todosSlice'
import done from '../../img/done.svg'
import inProgress from '../../img/in_progress.svg'
import bin from '../../img/bin.svg'


export const TaskItem = (props: Todo) => {

    const[editMode, setMode] = useState(false)
    const[changedText, setChangedText] = useState(props.text)
    const[urgency, setUrgency] = useState(props.urgency)
    const[status, setStatus] = useState(props.isCompleted)
    const[currentId, setCurrentId] = useState('no')
    const dispatch = useAppDispatch()

    const onChangeText = (e: any): void => setChangedText(e.target.value)
    const onChangeUrgency = (e: any): void => setUrgency(e.target.value)

    const onChangeStatus = (e: any): void => setStatus(e.target.value)
    
    const editModeOn = (e: any) => {
        setMode(true)
        setCurrentId(e.target.id)
    }
    //console.log(currentId)
    const editModeOff = (e: any) => {
        setChangedText(e.target.text)
        setUrgency(e.target.urgency)
        setMode(false)
    }
    return (
        <div className='task-item' onDoubleClick={editModeOn}>
            {!editMode ? 
            <div id={props.id} className='task-item__regular-mode'>
                <div className='task-item__status'><img src={props.isCompleted ? done : inProgress} alt='task status' /></div>
                <div className='task-item__text'>{props.urgency}</div>
                <div className='task-item__text'>{props.text}</div>
            </div>
            :
            <div className='task-item__edit-mode'>
                {/* <div className='task-item__status'><img src={inProgress} alt='task status' /></div> */}
                <form className='task-item__edit-form'
                    onSubmit={e => {
                    e.preventDefault()
                    editModeOff(e)
                    dispatch(fetchAlterTodo({
                        text: changedText,
                        isCompleted: status,
                        urgency: +urgency,
                        id: currentId
                    }))
                    }}
                >
                    <label>
                    Is done?
                    <input
                        name="isComplete"
                        type="checkbox"
                        checked={props.isCompleted}
                        onChange={onChangeStatus} />
                    </label>
                    <select defaultValue={props.urgency} onChange={onChangeUrgency}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input className='task-item__edit-text' defaultValue={props.text} onChange={onChangeText} />
                    <img src={bin} alt='bin' />
                    <button type="submit">Confirm changes</button>
                </form>
            </div>
            }
        </div>
    )
}


