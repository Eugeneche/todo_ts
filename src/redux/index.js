import { combineReducers } from 'redux'
import taskReducer from './redux-toolkit'

export default combineReducers({
    todos: taskReducer
})