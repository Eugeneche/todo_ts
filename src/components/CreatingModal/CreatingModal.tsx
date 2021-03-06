import { useState } from "react"
import { nanoid } from 'nanoid'
import { useAppDispatch } from '../../hooks/hooks'
import { addTask } from "../../redux/todosSlice"

export const CreatingModal = (props: any) => {

    const [todoText, setTodoText] = useState('')
    const dispatch = useAppDispatch()
  
    const onChange = (e: any): void => setTodoText(e.target.value)

    const changeMode = () => {
      props.setMode(false)
    }
    const id = nanoid()
  
    return (
      <div className='modal'>
        <form className='modal__form'
          onSubmit={e => {
            e.preventDefault()
            if (!todoText.trim()) {
              return
            }
            
            dispatch(addTask({
              id: id,
              text: todoText,
              isCompleted: false
            }))
            setTodoText('')
            changeMode()

          }}
        >
          <label>New task:
            <textarea value={todoText} onChange={onChange} autoFocus />
          </label>
          <div className='modal__buttons'>
            <button onClick={changeMode}>Cancel</button>
            <button type='submit'>Add Todo</button>           
          </div>
        </form>
      </div>
    )
}