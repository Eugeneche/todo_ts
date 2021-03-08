import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { todosAPI } from '../api/api'


export interface Todo {
    id?: string
    created?: any
    updated?: string
    text: string
    isCompleted: boolean
    urgency: number
  }

  interface Response {
    "status": string,
    "todo": {
      "id": string,
      "created": string,
      "updated": string,
      "text": string,
      "isCompleted": boolean,
      "urgency": number
    }
  }

let initialState = [] as Array<Todo> 

export const fetchNewTodo = createAsyncThunk<Todo, Todo>(
  'todos/fetchNewTodo',
  async (todo, thunkAPI) => {
    const { text, isCompleted, urgency }: Todo = todo
    const response: Response = await todosAPI.createTodo(text, isCompleted, urgency)
    return response.todo
  }
)

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
      console.log(action.payload)
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