import { connect } from 'react-redux'
import { TaskForm } from './TaskForm'
import addTask from '../../redux/taskReducer'

const mapDispatch = { addTask }



export default connect(null, mapDispatch)(TaskForm)