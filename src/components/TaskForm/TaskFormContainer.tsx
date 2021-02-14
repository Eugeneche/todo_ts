import { connect } from 'react-redux'
import { TaskForm } from './TaskForm'
import addTask from '../../redux/redux-toolkit'

const mapDispatch = { addTask }



export default connect(null, mapDispatch)(TaskForm)