import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { todosAPI } from '../api/api'
import { useAppDispatch } from '../hooks/hooks'


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

interface FetchTodosError {
  message: string;
}

let initialState = [] as Array<Todo> 

export const fetchNewTodo = createAsyncThunk<Todo, Todo, { rejectValue: FetchTodosError }>(
  'todos/fetchNewTodo',
  async (todoUserParams, thunkAPI) => {
    const { text, isCompleted, urgency }: Todo = todoUserParams
    const response: Response = await todosAPI.createTodo(text, isCompleted, urgency)

    if (response.status !== "OK") {
      return thunkAPI.rejectWithValue({ 
        message: "Něco se pokazilo, ale můžete to zkusit znovu." 
      });
    }
    
    const dispatch = useAppDispatch()
    dispatch(addTask(response.todo))
    console.log(response)
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