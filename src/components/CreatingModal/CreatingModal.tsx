import * as React from "react"
import { useState } from "react"
//import { addTask } from "./CreatingModalContainer"

export const CreatingModal = (props: any) => {

    const [todoText, setTodoText] = useState('')
  
    const onChange = (e: any): void => setTodoText(e.target.value)
  
    return (
      <div className='modal'>
        <form className='modal__form'
          onSubmit={e => {
            e.preventDefault()
            if (!todoText.trim()) {
              return
            }
            props.addTask(todoText)
            setTodoText('')
          }}
        >
          <label>New task:
            <textarea value={todoText} onChange={onChange} autoFocus />
          </label>
          <div className='modal__buttons'>
            <button>Cancel</button>
            <button type="submit">Add Todo</button>           
          </div>
        </form>
      </div>
    )
}