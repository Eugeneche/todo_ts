import * as React from "react"
import { useState } from "react"
import { addTask } from "../../redux/redux-toolkit"

export const TaskForm = () => {

    const [todoText, setTodoText] = useState('')
  
    const onChange = (e: any): void => setTodoText(e.target.value)
  
    return (
      <div className='task-item__form'>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!todoText.trim()) {
              return
            }
            addTask(todoText)
            setTodoText('')
          }}
        >
          <input value={todoText} onChange={onChange} />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    )
}