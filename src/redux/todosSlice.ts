import { createSlice, PayloadAction } from '@reduxjs/toolkit'


export interface Todo {
    id: string
    created?: string
    updated?: string
    text: string
    isCompleted: boolean
    urgency?: number
  }

let initialState = [] as Array<Todo> 

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    updateTask(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    }
  }
})

export default todosSlice.reducer
export const { addTask, updateTask } = todosSlice.actions