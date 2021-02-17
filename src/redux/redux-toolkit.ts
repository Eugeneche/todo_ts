import { createSlice, configureStore } from '@reduxjs/toolkit'

type todo = {
    id: string | null
    created: string | null
    updated: string | null
    text: string | null
    isCompleted: boolean
    urgency: number | null
  }

let initialState: Array<todo> = []

let nextTodoId = 0

const tasksSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        const { id, created, updated, text, isCompleted, urgency } = action.payload
        state.push({ id, created, updated, text, isCompleted: false, urgency })
        console.log(text)
      },
      prepare(text): any {
        return {payload: {text, id: nextTodoId++}}
      }
    },
    updateTask(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {
        todo.isCompleted = !todo.isCompleted
      }
    }
  }
})

//export default tasksSlice.reducer
export const { addTask, updateTask } = tasksSlice.actions

export const store = configureStore({
  reducer: tasksSlice.reducer,
})

/* export const taskReducer = (state:initialStateType = initialState, action: createNewTaskActionType):initialStateType => {
    return initialState;
}

type createNewTaskActionType = {
    type: typeof CREATE_NEW_TASK
    text: string
    isCompleted: boolean
    urgency: number
}

export const createNewTask = (text: string, isCompleted: boolean, urgency: number):createNewTaskActionType => {
    return {
        type: CREATE_NEW_TASK,
        text: text,
        isCompleted: isCompleted,
        urgency: urgency,
    }
} */